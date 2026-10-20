import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../shared.tsx';
import type { Base, Field } from '../../../shared.tsx';
export type ButtonProps = Base & { children: ReactNode; icon?: ReactNode; cta?: boolean } &
  ((ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }) | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; disabled?: boolean }));
export function Button({ children, icon, cta, modifiers, className, ...props }: ButtonProps) {
  const content = <>{icon}{children}{cta && <span aria-hidden="true"> →</span>}</>;
  const classes = bem('button', modifiers, className);
  if (props.href !== undefined) {
    const { disabled, href, ...rest } = props as AnchorHTMLAttributes<HTMLAnchorElement> & { disabled?: boolean };
    return <a {...rest} href={disabled ? undefined : href} aria-disabled={disabled || undefined} tabIndex={disabled ? -1 : rest.tabIndex} className={classes}>{content}</a>;
  }
  return <button type="button" {...props as ButtonHTMLAttributes<HTMLButtonElement>} className={classes}>{content}</button>;
}
