import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../shared.js';
import type { Base, Field } from '../../../shared.js';
export function CallOutBox({ children, modifiers, className, ...props }: Base & HTMLAttributes<HTMLDivElement>) { return <div {...props} className={bem('call-out-box', modifiers, className)}>{children}</div>; }
