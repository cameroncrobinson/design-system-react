import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../shared.tsx';
import type { Base } from '../../shared.tsx';


export type LayoutProps = { header?: ReactNode; system?: ReactNode; footer?: ReactNode; sidebar?: ReactNode; children: ReactNode; fullWidth?: boolean; className?: string }; export function DefaultLayout({ header, system, footer, sidebar, children, fullWidth, className }: LayoutProps) { const id = useId(); return <div className={bem('layout', ['padding-top'], className)}><a className="visually-hidden" href={'#' + id}>Skip to content</a>{header}{system}<div className={bem('main', [sidebar ? 'with-sidebar' : '', fullWidth ? 'full-width' : ''], fullWidth ? '' : 'flexgrid')}><main id={id} tabIndex={-1} className={bem('main-content', sidebar ? ['with-sidebar'] : [], sidebar ? 'col-xxl-9 col-l-12' : 'col-xxl-12')}>{children}</main>{sidebar && <aside className="main-sidebar col-xxl-3 col-l-12">{sidebar}</aside>}</div>{footer}</div>; }
