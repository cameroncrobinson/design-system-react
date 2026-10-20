import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Heading } from '../../01-atoms/text/headings/Heading.js';
import { Badge } from '../../01-atoms/badges/Badge.js';

export function EventCard({ title, href, date, shortMonth, day, time, location, tags, border = 'bottom' }: { title: ReactNode; href?: string; date?: ReactNode; shortMonth?: string; day?: string; time?: ReactNode; location?: ReactNode; tags?: ReactNode; border?: 'top'|'bottom'|'none' }) { return <div className={bem('event-card', ['border-' + border])}>{date && <div className="short-date"><p>{shortMonth}</p><p>{day}</p></div>}<div className="right-content"><Heading level={3} href={href}>{title}</Heading>{[date, time, location, tags].map((value, i) => value && <Badge key={i}>{value}</Badge>)}</div></div>; }
