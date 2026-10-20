import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { BasicPage } from '../basic-page/BasicPage.js';

export function ResourcePage({ title, children, ...props }: ComponentProps<typeof BasicPage>) { return <BasicPage {...props} title={title}><div className="resource">{children}</div></BasicPage>; }
