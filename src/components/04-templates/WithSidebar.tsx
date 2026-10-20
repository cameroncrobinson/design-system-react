import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../shared.tsx';
import type { Base } from '../../shared.tsx';
import { DefaultLayout } from './DefaultLayout.js';
import type { LayoutProps } from './DefaultLayout.js';
export function WithSidebar(props: LayoutProps & { sidebar: ReactNode }) { return <DefaultLayout {...props} />; }
