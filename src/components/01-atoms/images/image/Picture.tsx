import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.tsx';
import type { Base } from '../../../../shared.tsx';
import { Image } from './Image.js';

export function Picture({ sources = [], image }: { sources?: { srcSet: string; media?: string; type?: string }[]; image: ComponentProps<typeof Image> }) { return <picture>{sources.map((source, i) => <source key={i} {...source} />)}<Image {...image} /></picture>; }
