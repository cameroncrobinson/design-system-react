// @vitest-environment jsdom
import React from 'react';
import { renderToString } from 'react-dom/server';
import { afterEach, expect, test } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MainMenu, Menu, FilteredBookRiver, SearchInput, SearchResultsPage } from '../src/index';
afterEach(cleanup);
const stories = import.meta.glob('../src/components/**/*.stories.tsx', { eager: true });
test.each(Object.entries(stories))('renders the default catalog story: %s', (_, module: any) => {
  const { default: meta, Default: story } = module;
  const args = { ...meta.args, ...story.args };
  const element = story.render ? React.createElement(story.render, args) : React.createElement(meta.component, args);
  expect(() => renderToString(element)).not.toThrow();
});
test('main menu opens with the class used by its responsive Sass', () => {
  render(<MainMenu items={[{ label: 'Library', href: '/library' }]} />);
  const toggle = screen.getByRole('button', { name: 'Menu' });
  fireEvent.click(toggle);
  expect(toggle.getAttribute('aria-expanded')).toBe('true');
  expect(document.getElementById(toggle.getAttribute('aria-controls')!)?.classList.contains('main-nav--open')).toBe(true);
});
test('nested menu exposes child destinations and current page', () => {
  render(<Menu items={[{ label: 'Services', href: '/services', children: [{ label: 'Library', href: '/library', active: true }] }]} />);
  expect(screen.getByRole('link', { name: 'Library' }).getAttribute('aria-current')).toBe('page');
});
test('filtered book river switches its actual book collection', () => {
  render(<FilteredBookRiver title="Books" rivers={[{ id: 'fiction', label: 'Fiction', books: [{ title: 'Novel' }] }, { id: 'history', label: 'History', books: [{ title: 'Local history' }] }]} />);
  expect(screen.getByRole('heading', { name: 'Novel' })).toBeTruthy();
  fireEvent.click(screen.getByRole('tab', { name: 'History' }));
  expect(screen.getByRole('heading', { name: 'Local history' })).toBeTruthy();
  expect(screen.queryByRole('heading', { name: 'Novel' })).toBeNull();
});
test('search form sends entered query to the consumer', () => {
  let query = ''; render(<SearchInput onSearch={value => { query = value; }} />);
  fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'Library' } });
  fireEvent.submit(screen.getByRole('search'));
  expect(query).toBe('Library');
});
test('search results composes one main landmark, filters and pagination', () => {
  render(<SearchResultsPage summary="2 results" filters={<p>Filter options</p>} results={<p>Result list</p>} page={1} pageCount={2} onPageChange={() => {}} />);
  expect(screen.getAllByRole('main')).toHaveLength(1);
  expect(screen.getByRole('complementary')).toBeTruthy();
  expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeTruthy();
});
