import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';
import { StatCard } from '../../02-molecules/stat-card/StatCard.js';
import { Section } from '../../02-molecules/section/Section.js';

export function StatCardGroup({ title, items, columns = 3 }: { title?: string; items: ComponentProps<typeof StatCard>[]; columns?: 2|3|4 }) { return <Section title={title} background="primary-4"><div className="stat-card-group flexgrid-nm">{items.map((item, i) => <div key={i} className={'card_columns col-md-12 col-l-6 col-xxl-' + 12 / columns}><StatCard {...item} /></div>)}</div></Section>; }
