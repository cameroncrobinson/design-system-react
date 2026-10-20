import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Button } from '../../01-atoms/buttons/Button.js';

export function ButtonGroup({ items, columns = 3 }: { items: ComponentProps<typeof Button>[]; columns?: 2|3|4 }) { return <div className="button_group flexgrid-nm">{items.map((item, i) => <div key={i} className={'card_columns col-md-12 col-l-6 col-xxl-' + 12 / columns}><Button {...item} /></div>)}</div>; }
