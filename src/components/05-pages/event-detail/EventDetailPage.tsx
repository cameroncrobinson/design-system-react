import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { PageHeader } from '../../02-molecules/page-headers/page-header/PageHeader.js';
import { EventCard } from '../../02-molecules/event-card/EventCard.js';
import { RichText } from '../../02-molecules/rich-text/RichText.js';
import { DefaultLayout } from '../../04-templates/DefaultLayout.js';
import type { LayoutProps } from '../../04-templates/DefaultLayout.js';
export function EventDetailPage({ title, event, location, virtual, children, ...layout }: Omit<LayoutProps, 'children'> & { title: string; event: ComponentProps<typeof EventCard>; location?: ReactNode; virtual?: boolean; children: ReactNode }) { return <DefaultLayout {...layout}><PageHeader title={title} /><div className="event-detail"><div className="event-detail__content flexgrid-nm"><div className="col-xxl-7 col-xl-7 col-l-12"><RichText>{children}</RichText></div><div className="event-detail-card col-xxl-4 col-xl-4 col-l-12"><EventCard {...event} /></div></div>{!virtual && location && <div className="event-detail__location">{location}</div>}</div></DefaultLayout>; }
