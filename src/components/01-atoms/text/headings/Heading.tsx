import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../../shared.tsx';
import type { Base, Field } from '../../../../shared.tsx';
export function Heading({ level = 2, href, children, className, modifiers, ...props }: Base & HTMLAttributes<HTMLHeadingElement> & { level?: 1|2|3|4|5|6; href?: string }) {
  const Tag = `h${level}` as 'h2';
  return <Tag {...props} className={bem(`h${level}`, modifiers, className)}>{href ? <a href={href}>{children}</a> : children}</Tag>;
}
