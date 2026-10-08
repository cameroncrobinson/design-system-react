import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../shared.js';
import type { Base, Field } from '../../../shared.js';
export function Textarea({ label, description, error, id: provided, ...props }: Field & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const generated = useId(); const id = provided ?? generated;
  return <FieldWrapper {...{ id, label, description, error }}><textarea {...props} id={id} aria-invalid={error ? true : props['aria-invalid']} aria-describedby={describedBy(id, description, error, props['aria-describedby'])} /></FieldWrapper>;
}
