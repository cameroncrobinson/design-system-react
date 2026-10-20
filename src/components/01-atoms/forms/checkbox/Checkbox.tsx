import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../../shared.tsx';
import type { Base, Field } from '../../../../shared.tsx';
export function Checkbox({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: ReactNode }) { return <label className="form-item"><input {...props} type="checkbox" /> {label}</label>; }
