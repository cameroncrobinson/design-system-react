import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../shared.js';
import type { Base, Field } from '../../../shared.js';
export function Status({ messages, type = 'status' }: { messages: ReactNode[]; type?: 'status'|'error'|'warning' }) {
  return <div className={bem('status', [type], 'flexgrid')} role={type === 'error' ? 'alert' : 'status'}><h2 className="visually-hidden">{type}</h2><ul className="status__list">{messages.map((message, i) => <li key={i} className={bem('status__item', [type])}>{message}</li>)}</ul></div>;
}
