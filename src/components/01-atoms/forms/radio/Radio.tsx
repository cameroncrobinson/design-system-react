import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../../shared.js';
import type { Base, Field } from '../../../../shared.js';
export function Radio({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: ReactNode }) { return <label className="form-item"><input {...props} type="radio" /> {label}</label>; }
