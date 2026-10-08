import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../shared.js';
import type { Base, Field } from '../../../shared.js';
export type AccordionItem = { id: string; title: ReactNode; content: ReactNode };
export function Accordion({ items, defaultOpen = [], className }: { items: AccordionItem[]; defaultOpen?: string[]; className?: string }) {
  const prefix = useId();
  const [open, setOpen] = useState(defaultOpen);
  return <div className={bem('accordion-group', [], className)}>{items.map(item => {
    const expanded = open.includes(item.id); const id = `${prefix}-${item.id}`;
    return <div key={item.id}><div className={`accordion-item${expanded ? ' open' : ''}`}><button type="button" className="accordion-title" id={`${id}-title`} aria-controls={id} aria-expanded={expanded} onClick={() => setOpen(current => expanded ? current.filter(key => key !== item.id) : [...current, item.id])}>{item.title}</button><span aria-hidden="true">{expanded ? '−' : '+'}</span></div><div className="accordion-text" id={id} role="region" aria-labelledby={`${id}-title`} hidden={!expanded}>{item.content}</div></div>;
  })}</div>;
}
