import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';


export function Icon({ children, label, className, ...props }: HTMLAttributes<HTMLSpanElement> & { label?: string }) { return <span {...props} className={bem('icon', [], className)} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>{children}</span>; }
