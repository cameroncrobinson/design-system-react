import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.js';
import type { Base } from '../../../../shared.js';


export function Image({ alt, className, ...props }: ImgHTMLAttributes<HTMLImageElement> & { alt: string }) { return <img {...props} className={bem('image', [], className)} alt={alt} />; }
