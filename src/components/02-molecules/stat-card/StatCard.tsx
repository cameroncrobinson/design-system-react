import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../shared.js';
import type { Base, Field } from '../../../shared.js';
export function StatCard({ stat, description, icon, className }: { stat: ReactNode; description: ReactNode; icon?: ReactNode; className?: string }) {
  return <div className={bem('icon-stat-card', [], className)}>{icon && <span aria-hidden="true">{icon}</span>}<p className="stat">{stat}</p><p className="description">{description}</p></div>;
}
