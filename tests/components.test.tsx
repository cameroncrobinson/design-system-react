// @vitest-environment jsdom
import React from 'react';
import { afterEach, expect, test, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Accordion, Alert, Button, Pagination, Tabs, TextField } from '../src/index';
afterEach(cleanup);
const items = [{ id: 'one', title: 'One', content: 'First panel' }, { id: 'two', title: 'Two', content: 'Second panel' }];
test('accordion links unique controls and toggles its panel', () => {
  render(<><Accordion items={items} /><Accordion items={items} /></>);
  const buttons = screen.getAllByRole('button', { name: 'One' });
  expect(buttons[0].getAttribute('aria-controls')).not.toBe(buttons[1].getAttribute('aria-controls'));
  expect(buttons[0].getAttribute('aria-expanded')).toBe('false');
  fireEvent.click(buttons[0]);
  expect(buttons[0].getAttribute('aria-expanded')).toBe('true');
  expect(screen.getAllByRole('region')).toHaveLength(1);
});
test('tabs support keyboard selection and focus', () => {
  render(<Tabs items={items} label="Example" />);
  fireEvent.keyDown(screen.getByRole('tab', { name: 'One' }), { key: 'ArrowRight' });
  expect(screen.getByRole('tab', { name: 'Two' }).getAttribute('aria-selected')).toBe('true');
  expect(document.activeElement).toBe(screen.getByRole('tab', { name: 'Two' }));
  expect(screen.getByRole('tabpanel').textContent).toBe('Second panel');
});
test('alerts dismiss and notify the consumer', () => {
  const dismiss = vi.fn();
  render(<Alert title="Notice" dismissible onDismiss={dismiss} />);
  fireEvent.click(screen.getByRole('button', { name: 'Dismiss alert' }));
  expect(screen.queryByRole('status')).toBeNull(); expect(dismiss).toHaveBeenCalledOnce();
});
test('form errors and descriptions are associated with the input', () => {
  render(<TextField label="Email" description="Work email" error="Required" />);
  const input = screen.getByRole('textbox', { name: 'Email' });
  expect(input.getAttribute('aria-invalid')).toBe('true');
  const ids = input.getAttribute('aria-describedby')!.split(' ');
  expect(ids.map(id => document.getElementById(id)?.textContent)).toEqual(['Work email', 'Required']);
});
test('buttons use native action and navigation semantics', () => {
  render(<><Button>Save</Button><Button href="/services">Services</Button><Button href="/hidden" disabled>Unavailable</Button></>);
  expect(screen.getByRole('button', { name: 'Save' }).getAttribute('type')).toBe('button');
  expect(screen.getByRole('link', { name: 'Services' }).getAttribute('href')).toBe('/services');
  expect(screen.queryByRole('link', { name: 'Unavailable' })).toBeNull();
});
test('pagination prevents moving before the first page', () => {
  const change = vi.fn(); render(<Pagination page={1} pageCount={12} onPageChange={change} />);
  fireEvent.click(screen.getByRole('button', { name: 'Previous' })); expect(change).not.toHaveBeenCalled();
  fireEvent.click(screen.getByRole('button', { name: 'Next' })); expect(change).toHaveBeenCalledWith(2);
});
