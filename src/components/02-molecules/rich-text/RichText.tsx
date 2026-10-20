import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Heading } from '../../01-atoms/text/headings/Heading.js';

export function RichText({ title, children, className }: { title?: string; children: ReactNode; className?: string }) { return <div className={bem('rich-text', [], className)}>{title && <Heading>{title}</Heading>}{children}</div>; }
