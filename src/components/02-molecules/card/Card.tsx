import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../shared.tsx';
import type { Base, Field } from '../../../shared.tsx';
import { Heading } from '../../01-atoms/text/headings/Heading.js';
import { Badge } from '../../01-atoms/badges/Badge.js';
export type CardProps = Base & HTMLAttributes<HTMLDivElement> & { title: ReactNode; href?: string; image?: { src: string; alt: string }; date?: ReactNode; tags?: ReactNode; background?: boolean };
export function Card({ title, href, image, date, tags, background, children, modifiers = [], className, ...props }: CardProps) {
  const picture = image && <img className="card__image" src={image.src} alt={image.alt} />;
  return <div {...props} className={bem('card', [...modifiers, ...(background ? ['with-background'] : !image ? ['no-img'] : [])], className)}>
    {picture && (href ? <a href={href}>{picture}</a> : picture)}<div className="card__content"><Heading level={3} href={href} modifiers={href ? ['link'] : []}>{title}</Heading>{children}{date && <div className="date">{date}</div>}{tags && <Badge>{tags}</Badge>}</div>
  </div>;
}
