import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';


export type MenuItem = { label: string; href?: string; active?: boolean; children?: MenuItem[] }; export function Menu({ items, baseClass = 'menu', level = 0 }: { items: MenuItem[]; baseClass?: string; level?: number }) { return <ul className={bem(baseClass, level ? ['sub', 'sub-' + level] : [])}>{items.map((item, i) => <li key={i} className={bem(baseClass + '__item', item.children?.length ? ['with-sub'] : [])}>{item.href ? <a href={item.href} className={bem(baseClass + '__link', item.active ? ['active'] : [])} aria-current={item.active ? 'page' : undefined}>{item.label}</a> : <span>{item.label}</span>}{item.children?.length ? <Menu items={item.children} baseClass={baseClass} level={level + 1} /> : null}</li>)}</ul>; }
