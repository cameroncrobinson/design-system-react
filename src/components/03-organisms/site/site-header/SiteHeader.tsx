import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.tsx';
import type { Base } from '../../../../shared.tsx';
import { MainMenu } from '../../../02-molecules/menus/main-menu/MainMenu.js';
import type { MenuItem } from '../../../02-molecules/menus/Menu.js';
export function SiteHeader({ branding, items, top }: { branding: ReactNode; items: MenuItem[]; top?: ReactNode }) { return <header className="header">{top && <div className="header__top">{top}</div>}<div className="header__inner flexgrid"><div className="header__primary"><div className="header__branding">{branding}</div><div className="header__menu"><MainMenu items={items} /></div></div></div></header>; }
