import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { IconCard } from '../../02-molecules/icon-card/IconCard.js';

export function IconCardGroup({ items, columns = 3 }: { items: ComponentProps<typeof IconCard>[]; columns?: 2|3|4 }) { return <div className="icon_card_group flexgrid-nm">{items.map((item, i) => <div key={i} className={'card_columns col-md-12 col-l-6 col-xxl-' + 12 / columns}><IconCard {...item} /></div>)}</div>; }
