import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Tabs } from '../tabs/Tabs.js';
import { Menu } from '../menus/Menu.js';
import type { MenuItem } from '../menus/Menu.js';
export function HowDoI({ items }: { items: { id: string; title: string; icon?: ReactNode; links: MenuItem[] }[] }) { return <div className="how-do-i"><Tabs label="How do I" items={items.map(item => ({ id: item.id, title: <>{item.icon}{item.title}</>, content: <Menu items={item.links} baseClass="how-do-i__menu" /> }))} /></div>; }
