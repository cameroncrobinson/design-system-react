import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';
import { Heading } from '../../01-atoms/text/headings/Heading.js';
import { Image } from '../../01-atoms/images/image/Image.js';

export type BookProps = { title: string; href?: string; image?: { src: string; alt: string }; author?: string }; export function Book({ title, href, image, author }: BookProps) { return <div className="book">{image && <a href={href}><Image {...image} className="book__image" /></a>}<Heading level={3} href={href}>{title}</Heading>{author && <p className="book-author">{author}</p>}</div>; }
