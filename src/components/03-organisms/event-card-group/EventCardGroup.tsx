import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { EventCard } from '../../02-molecules/event-card/EventCard.js';

export function EventCardGroup({ items, columns = 3 }: { items: ComponentProps<typeof EventCard>[]; columns?: 2|3|4 }) { return <div className="event-card-group flexgrid-nm">{items.map((item, i) => <div key={i} className={'card_columns col-md-12 col-l-6 col-xxl-' + 12 / columns}><EventCard {...item} /></div>)}</div>; }
