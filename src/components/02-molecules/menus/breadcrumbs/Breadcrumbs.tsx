import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../../shared.tsx';
import type { Base, Field } from '../../../../shared.tsx';
export function Breadcrumbs({ items, label = 'Breadcrumb' }: { items: { text: string; href?: string }[]; label?: string }) {
  return <nav className="breadcrumb flexgrid" aria-label={label}><ol>{items.map((item, i) => <li className="breadcrumb__item" key={i}>{item.href && i !== items.length - 1 ? <a className="breadcrumb__link" href={item.href}>{item.text}</a> : <span aria-current={i === items.length - 1 ? 'page' : undefined}>{item.text}</span>}{i < items.length - 1 && <span className="angle" aria-hidden="true"> / </span>}</li>)}</ol></nav>;
}
