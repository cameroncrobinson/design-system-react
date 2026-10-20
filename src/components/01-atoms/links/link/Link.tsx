import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.tsx';
import type { Base } from '../../../../shared.tsx';


export function Link({ children, modifiers, className, ...props }: Base & AnchorHTMLAttributes<HTMLAnchorElement>) { return <a {...props} className={bem('link', modifiers, className)}>{children}</a>; }
