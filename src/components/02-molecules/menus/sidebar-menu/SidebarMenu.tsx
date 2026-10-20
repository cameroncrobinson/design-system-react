import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.tsx';
import type { Base } from '../../../../shared.tsx';
import { Menu } from '../Menu.js';
import type { MenuItem } from '../Menu.js';
export function SidebarMenu({ items, label = 'Navigation' }: { items: MenuItem[]; label?: string }) { return <nav aria-label={label}><Menu items={items} baseClass="sidebar-menu" /></nav>; }
