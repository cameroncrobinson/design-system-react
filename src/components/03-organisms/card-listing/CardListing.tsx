import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Button } from '../../01-atoms/buttons/Button.js';
import { Heading } from '../../01-atoms/text/headings/Heading.js';
import { Card } from '../../02-molecules/card/Card.js';
import type { CardProps } from '../../02-molecules/card/Card.js';
export function CardListing({ title, items, allLink }: { title: string; items: CardProps[]; allLink?: { href: string; label: string } }) { return <><div className="card-listing-header"><Heading>{title}</Heading>{allLink && <Button href={allLink.href} modifiers={['secondary']}>{allLink.label}</Button>}</div><div className="card-listing">{items.map((item, i) => <Card {...item} key={i} />)}</div></>; }
