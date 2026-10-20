import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';


export function OrderedList({ items, ...props }: HTMLAttributes<HTMLOListElement> & { items: ReactNode[] }) { return <ol {...props}>{items.map((item, i) => <li key={i}>{item}</li>)}</ol>; }
