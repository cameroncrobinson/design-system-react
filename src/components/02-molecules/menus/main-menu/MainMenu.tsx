import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.tsx';
import type { Base } from '../../../../shared.tsx';
import { Menu } from '../Menu.js';
import type { MenuItem } from '../Menu.js';
export function MainMenu({ items, label = 'Main navigation' }: { items: MenuItem[]; label?: string }) { const [open, setOpen] = useState(false); const id = useId(); return <nav aria-label={label}><button type="button" className={bem('toggle-expand', open ? ['open'] : [])} aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>Menu</button><div id={id} className={'main-nav' + (open ? ' main-nav--open' : '')}><Menu items={items} baseClass="main-menu" /></div></nav>; }
