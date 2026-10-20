import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Pagination } from '../../02-molecules/pager/Pagination.js';
import { SidebarFilters } from '../../02-molecules/sidebar-filters/SidebarFilters.js';
import { SearchHeader } from '../../02-molecules/page-headers/search-header/SearchHeader.js';
import { WithSidebar } from '../../04-templates/WithSidebar.js';
import type { LayoutProps } from '../../04-templates/DefaultLayout.js';
export function SearchResultsPage({ summary, filters, results, page, pageCount, onPageChange, onSearch, ...layout }: Omit<LayoutProps, 'children'> & { summary: string; filters: ReactNode; results: ReactNode; page: number; pageCount: number; onPageChange: (page: number) => void; onSearch?: (query: string) => void }) { return <WithSidebar {...layout} className="search-result-page" system={<>{layout.system}<SearchHeader onSearch={onSearch} /></>} sidebar={<SidebarFilters>{filters}</SidebarFilters>}><p className="summary">{summary}</p>{results}<Pagination page={page} pageCount={pageCount} onPageChange={onPageChange} /></WithSidebar>; }
