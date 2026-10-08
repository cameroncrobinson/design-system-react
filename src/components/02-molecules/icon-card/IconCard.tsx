import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../shared.js';
import type { Base, Field } from '../../../shared.js';
import { Heading } from '../../01-atoms/text/headings/Heading.js';
export function IconCard({ title, href, icon, children, cta, className }: { title: ReactNode; href?: string; icon: ReactNode; children?: ReactNode; cta?: boolean; className?: string }) {
  const content = <><span className="icon-card__icon" aria-hidden="true">{icon}</span><div className="icon-card__content"><div className="icon-card__title"><Heading level={3}>{title}</Heading></div>{children && <div className="icon-card__description">{children}{cta && <span aria-hidden="true"> →</span>}</div>}</div></>;
  const classes = bem('icon-card', [href ? 'link' : '', children ? 'with-description' : '', cta ? 'with-cta-arrow' : ''], className);
  return href ? <a href={href} className={classes}>{content}</a> : <div className={classes}>{content}</div>;
}
