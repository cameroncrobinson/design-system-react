import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.tsx';
import type { Base } from '../../../../shared.tsx';
import { Image } from './Image.js';

export function Figure({ image, caption, className }: { image: ComponentProps<typeof Image>; caption?: ReactNode; className?: string }) { return <figure className={className}><Image {...image} />{caption && <figcaption>{caption}</figcaption>}</figure>; }
