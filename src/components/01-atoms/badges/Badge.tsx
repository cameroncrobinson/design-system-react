import { Children, useId, useRef, useState } from 'react';
import type {
  ReactNode,
  HTMLAttributes,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

import { bem, FieldWrapper, describedBy } from '../../../shared.js';
import type { Base, Field } from '../../../shared.js';
export function Badge({
  children,
  icon,
  label,
  lighter,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon?: ReactNode;
  label?: string;
  lighter?: boolean;
}) {
  return (
    <div
      {...props}
      className={bem('badge', lighter ? ['lighter'] : [], className)}
    >
      {icon && (
        <span className="badge__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>
        {label && <span>{label}: </span>}
        {children}
      </span>
    </div>
  );
}
