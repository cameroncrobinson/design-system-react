import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';


export function DefinitionList({ items }: { items: { term: ReactNode; description: ReactNode }[] }) { return <dl>{items.map((item, i) => <Fragment key={i}><dt>{item.term}</dt><dd>{item.description}</dd></Fragment>)}</dl>; }
