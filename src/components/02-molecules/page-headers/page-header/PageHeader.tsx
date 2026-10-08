import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../../shared.js';
import type { Base, Field } from '../../../../shared.js';
import { Heading } from '../../../01-atoms/text/headings/Heading.js';
export function PageHeader({ title, date }: { title: ReactNode; date?: ReactNode }) { return <div className="page-header"><Heading level={1} className="page-header__title">{title}</Heading>{date && <div className="page-header__date">{date}</div>}</div>; }
