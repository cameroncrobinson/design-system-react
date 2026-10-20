import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../../shared.tsx';
import type { Base, Field } from '../../../../shared.tsx';
export function Select({ label, description, error, id: provided, children, ...props }: Field & SelectHTMLAttributes<HTMLSelectElement>) {
  const generated = useId(); const id = provided ?? generated;
  return <FieldWrapper {...{ id, label, description, error }}><select {...props} id={id} aria-invalid={error ? true : props['aria-invalid']} aria-describedby={describedBy(id, description, error, props['aria-describedby'])}>{children}</select></FieldWrapper>;
}
