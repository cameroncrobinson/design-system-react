import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';


export function Flex({ children, gap = '1rem', ...props }: HTMLAttributes<HTMLDivElement> & { gap?: string }) { return <div {...props} style={{ display: 'flex', gap, flexWrap: 'wrap', ...props.style }}>{children}</div>; }
