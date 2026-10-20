import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Button } from '../../01-atoms/buttons/Button.js';
import { Heading } from '../../01-atoms/text/headings/Heading.js';
import { EventCard } from '../../02-molecules/event-card/EventCard.js';

export function EventListing({ title, items, allLink }: { title: string; items: ComponentProps<typeof EventCard>[]; allLink?: { href: string; label: string } }) { return <><div className="event-listing-header"><Heading>{title}</Heading>{allLink && <Button href={allLink.href} modifiers={['secondary']}>{allLink.label}</Button>}</div><div className="event-listing">{items.map((item, i) => <EventCard {...item} border="top" key={i} />)}</div></>; }
