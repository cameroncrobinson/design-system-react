import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Figure } from '../../01-atoms/images/image/Figure.js';

export function PhotoGallery({ items }: { items: { src: string; alt: string; caption?: string }[] }) { return <div className="photo-gallery">{items.map((item, i) => <div className="photo-gallery__item" key={i}><Figure image={item} caption={item.caption} /></div>)}</div>; }
