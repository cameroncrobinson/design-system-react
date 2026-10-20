import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../shared.tsx';
import type { Base, Field } from '../../../shared.tsx';
import { Heading } from '../../01-atoms/text/headings/Heading.js';
export function Section({ title, children, background, padding, margin, className, ...props }: HTMLAttributes<HTMLElement> & { title?: string; background?: string; padding?: 's'|'m'|'l'; margin?: 's'|'m'|'l' }) {
  return <section {...props} className={bem('section', [background ?? 'no-bg', background ? 'with-background' : '', padding ? `padding-${padding}` : '', margin ? `margin-${margin}` : ''], className)}><div className="flexgrid">{title && <div className="section__header"><Heading>{title}</Heading></div>}{children}</div></section>;
}
