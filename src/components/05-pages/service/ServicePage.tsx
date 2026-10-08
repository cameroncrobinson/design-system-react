import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';
import { BasicPage } from '../basic-page/BasicPage.js';

export function ServicePage({ title, children, ...props }: ComponentProps<typeof BasicPage>) { return <BasicPage {...props} title={title}><div className="service">{children}</div></BasicPage>; }
