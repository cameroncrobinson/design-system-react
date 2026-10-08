import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../shared.js';
import type { Base, Field } from '../../../shared.js';
export function CardGroup({ children, columns = 3, className }: { children: ReactNode; columns?: 2|3|4; className?: string }) { return <div className={bem('card-group', [], `flexgrid-nm ${className ?? ''}`)}>{Children.map(children, child => <div className={`card col-sm-12 col-md-${columns === 4 ? 6 : 12} col-xl-${12 / columns} col-xxl-${12 / columns}`}>{child}</div>)}</div>; }
