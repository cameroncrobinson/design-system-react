import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.js';
import type { Base } from '../../../../shared.js';
import { Menu } from '../Menu.js';
import type { MenuItem } from '../Menu.js';
export function MenuButtonGroup({ items, label = 'Navigation' }: { items: MenuItem[]; label?: string }) { return <nav aria-label={label}><Menu items={items} baseClass="button-group" /></nav>; }
