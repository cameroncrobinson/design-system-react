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
export type Base = { className?: string; modifiers?: string[] };
export function bem(base: string, modifiers: string[] = [], className = '') {
  return [
    base,
    ...modifiers.filter(Boolean).map((value) => `${base}--${value}`),
    className,
  ]
    .filter(Boolean)
    .join(' ');
}
export type Field = {
  label: string;
  description?: ReactNode;
  error?: ReactNode;
};
export function FieldWrapper({
  id,
  label,
  description,
  error,
  children,
}: Field & { id: string; children: ReactNode }) {
  return (
    <div className={`form-item${error ? ' form-item--error' : ''}`}>
      <label className="form-item__label" htmlFor={id}>
        {label}
      </label>
      {children}
      {description && (
        <div id={`${id}-description`} className="form-item__description">
          {description}
        </div>
      )}
      {error && (
        <div id={`${id}-error`} className="form-item--error-message">
          {error}
        </div>
      )}
    </div>
  );
}
export function describedBy(
  id: string,
  description: ReactNode,
  error: ReactNode,
  existing?: string,
) {
  return (
    [
      existing,
      description ? `${id}-description` : '',
      error ? `${id}-error` : '',
    ]
      .filter(Boolean)
      .join(' ') || undefined
  );
}
