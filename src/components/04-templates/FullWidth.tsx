import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../shared.js';
import type { Base } from '../../shared.js';
import { DefaultLayout } from './DefaultLayout.js';
import type { LayoutProps } from './DefaultLayout.js';
export function FullWidth(props: LayoutProps) { return <DefaultLayout {...props} fullWidth />; }
