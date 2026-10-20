import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';


export function SimpleBanner({ children, className, modifiers }: Base & { children: ReactNode }) { return <div className={bem('simple-banner', modifiers, className)}><div className="simple-banner__content flexgrid">{children}</div></div>; }
