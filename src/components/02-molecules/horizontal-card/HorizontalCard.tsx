import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';
import { Card } from '../card/Card.js';
import { Image } from '../../01-atoms/images/image/Image.js';
import type { CardProps } from '../card/Card.js';
export function HorizontalCard({ image, ...props }: CardProps) { return <div className={bem('horizontal_card', image ? [] : ['no-image'])}>{image && <a href={props.href}><Image {...image} className="horizontal_card__image" /></a>}<Card {...props} /></div>; }
