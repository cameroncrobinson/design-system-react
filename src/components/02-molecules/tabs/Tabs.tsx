import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

import { bem, FieldWrapper, describedBy } from '../../../shared.tsx';
import type { Base, Field } from '../../../shared.tsx';
import type { AccordionItem } from '../accordions/Accordion.js';
export function Tabs({ items, label, className }: { items: AccordionItem[]; label: string; className?: string }) {
  const prefix = useId(); const [active, setActive] = useState(0); const refs = useRef<(HTMLButtonElement|null)[]>([]);
  const selected = Math.min(active, Math.max(0, items.length - 1));
  return <div className={bem('tabs', [], className)}><ul className="tabs__nav" role="tablist" aria-label={label}>{items.map((item, i) => <li key={item.id} role="presentation"><button type="button" ref={el => { refs.current[i] = el; }} role="tab" id={`${prefix}-${item.id}-tab`} aria-controls={`${prefix}-${item.id}-panel`} aria-selected={selected === i} tabIndex={selected === i ? 0 : -1} className={`tabs__link tabs__link--local-tasks${selected === i ? ' is-active' : ''}`} onClick={() => setActive(i)} onKeyDown={event => {
    let next: number;
    if (event.key === 'ArrowRight') next = (i + 1) % items.length;
    else if (event.key === 'ArrowLeft') next = (i + items.length - 1) % items.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = items.length - 1;
    else return;
    event.preventDefault(); setActive(next); refs.current[next]?.focus();
  }}>{item.title}</button></li>)}</ul>{items.map((item, i) => <div key={item.id} className={`tabs__tab${selected === i ? ' is-active' : ''}`} role="tabpanel" id={`${prefix}-${item.id}-panel`} aria-labelledby={`${prefix}-${item.id}-tab`} hidden={selected !== i} tabIndex={0}><div className="tabs__content">{item.content}</div></div>)}</div>;
}
