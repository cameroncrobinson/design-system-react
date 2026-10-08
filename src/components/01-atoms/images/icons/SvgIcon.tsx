import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.js';
import type { Base } from '../../../../shared.js';


export function SvgIcon({ href, label, ...props }: SVGProps<SVGSVGElement> & { href: string; label?: string }) { return <svg {...props} role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}><use href={href} /></svg>; }
