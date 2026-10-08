import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../shared.js';
import type { Base, Field } from '../../../shared.js';
export function Pagination({ page, pageCount, onPageChange, label = 'Pagination' }: { page: number; pageCount: number; onPageChange: (page: number) => void; label?: string }) {
  if (pageCount < 1) return null;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1).filter(p => p === 1 || p === pageCount || Math.abs(p - page) <= 2);
  return <nav className="pager" aria-label={label}><ul className="pager__items"><li className="pager__item"><button type="button" className="pager__link" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>Previous</button></li>{pages.map((p, i) => <li key={p} className={`pager__item${page === p ? ' is-active' : ''}`}>{i > 0 && p - pages[i - 1] > 1 && <span aria-hidden="true">… </span>}<button type="button" className={`pager__link${page === p ? ' is-active' : ''}`} aria-label={`Page ${p}`} aria-current={page === p ? 'page' : undefined} onClick={() => onPageChange(p)}>{p}</button></li>)}<li className="pager__item"><button type="button" className="pager__link" disabled={page >= pageCount} onClick={() => onPageChange(page + 1)}>Next</button></li></ul></nav>;
}
