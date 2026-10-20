import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { PageHeader } from '../../02-molecules/page-headers/page-header/PageHeader.js';
import { DefaultLayout } from '../../04-templates/DefaultLayout.js';
import type { LayoutProps } from '../../04-templates/DefaultLayout.js';
export function BasicPage({ title, children, sidebar, ...layout }: Omit<LayoutProps, 'children'> & { title: string; children: ReactNode }) { return <DefaultLayout {...layout} sidebar={sidebar}><PageHeader title={title} /><div className="paragraph-content">{children}</div></DefaultLayout>; }
