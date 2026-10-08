import { Children, useId, useRef, useState } from 'react';
import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes, AnchorHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

type Base = { className?: string; modifiers?: string[] };
export function bem(base: string, modifiers: string[] = [], className = '') {
  return [base, ...modifiers.filter(Boolean).map(value => `${base}--${value}`), className].filter(Boolean).join(' ');
}
export type ButtonProps = Base & { children: ReactNode; icon?: ReactNode; cta?: boolean } &
  ((ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }) | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; disabled?: boolean }));
export function Button({ children, icon, cta, modifiers, className, ...props }: ButtonProps) {
  const content = <>{icon}{children}{cta && <span aria-hidden="true"> →</span>}</>;
  const classes = bem('button', modifiers, className);
  if (props.href !== undefined) {
    const { disabled, href, ...rest } = props as AnchorHTMLAttributes<HTMLAnchorElement> & { disabled?: boolean };
    return <a {...rest} href={disabled ? undefined : href} aria-disabled={disabled || undefined} tabIndex={disabled ? -1 : rest.tabIndex} className={classes}>{content}</a>;
  }
  return <button type="button" {...props as ButtonHTMLAttributes<HTMLButtonElement>} className={classes}>{content}</button>;
}
export function Heading({ level = 2, href, children, className, modifiers, ...props }: Base & HTMLAttributes<HTMLHeadingElement> & { level?: 1|2|3|4|5|6; href?: string }) {
  const Tag = `h${level}` as 'h2';
  return <Tag {...props} className={bem(`h${level}`, modifiers, className)}>{href ? <a href={href}>{children}</a> : children}</Tag>;
}
export function Badge({ children, icon, label, lighter, className, ...props }: HTMLAttributes<HTMLDivElement> & { icon?: ReactNode; label?: string; lighter?: boolean }) {
  return <div {...props} className={bem('badge', lighter ? ['lighter'] : [], className)}>{icon && <span className="badge__icon" aria-hidden="true">{icon}</span>}<span>{label && <span>{label}: </span>}{children}</span></div>;
}
export type CardProps = Base & HTMLAttributes<HTMLDivElement> & { title: ReactNode; href?: string; image?: { src: string; alt: string }; date?: ReactNode; tags?: ReactNode; background?: boolean };
export function Card({ title, href, image, date, tags, background, children, modifiers = [], className, ...props }: CardProps) {
  const picture = image && <img className="card__image" src={image.src} alt={image.alt} />;
  return <div {...props} className={bem('card', [...modifiers, ...(background ? ['with-background'] : !image ? ['no-img'] : [])], className)}>
    {picture && (href ? <a href={href}>{picture}</a> : picture)}<div className="card__content"><Heading level={3} href={href} modifiers={href ? ['link'] : []}>{title}</Heading>{children}{date && <div className="date">{date}</div>}{tags && <Badge>{tags}</Badge>}</div>
  </div>;
}
export function IconCard({ title, href, icon, children, cta, className }: { title: ReactNode; href?: string; icon: ReactNode; children?: ReactNode; cta?: boolean; className?: string }) {
  const content = <><span className="icon-card__icon" aria-hidden="true">{icon}</span><div className="icon-card__content"><div className="icon-card__title"><Heading level={3}>{title}</Heading></div>{children && <div className="icon-card__description">{children}{cta && <span aria-hidden="true"> →</span>}</div>}</div></>;
  const classes = bem('icon-card', [href ? 'link' : '', children ? 'with-description' : '', cta ? 'with-cta-arrow' : ''], className);
  return href ? <a href={href} className={classes}>{content}</a> : <div className={classes}>{content}</div>;
}
export function StatCard({ stat, description, icon, className }: { stat: ReactNode; description: ReactNode; icon?: ReactNode; className?: string }) {
  return <div className={bem('icon-stat-card', [], className)}>{icon && <span aria-hidden="true">{icon}</span>}<p className="stat">{stat}</p><p className="description">{description}</p></div>;
}
export function Alert({ title, children, level = 'informational', dismissible, onDismiss, icon, className }: { title: ReactNode; children?: ReactNode; level?: 'informational'|'non-emergency'|'emergency'; dismissible?: boolean; onDismiss?: () => void; icon?: ReactNode; className?: string }) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return <div className={bem('alerts', [level], className)} role={level === 'emergency' ? 'alert' : 'status'}><div className="alerts__content flexgrid">{icon && <span aria-hidden="true">{icon}</span>}<div className="alerts__body"><Heading level={4}>{title}</Heading>{children}</div>{dismissible && <button className="close" type="button" aria-label="Dismiss alert" onClick={() => { setDismissed(true); onDismiss?.(); }}>×</button>}</div></div>;
}
export function Status({ messages, type = 'status' }: { messages: ReactNode[]; type?: 'status'|'error'|'warning' }) {
  return <div className={bem('status', [type], 'flexgrid')} role={type === 'error' ? 'alert' : 'status'}><h2 className="visually-hidden">{type}</h2><ul className="status__list">{messages.map((message, i) => <li key={i} className={bem('status__item', [type])}>{message}</li>)}</ul></div>;
}
export type AccordionItem = { id: string; title: ReactNode; content: ReactNode };
export function Accordion({ items, defaultOpen = [], className }: { items: AccordionItem[]; defaultOpen?: string[]; className?: string }) {
  const prefix = useId();
  const [open, setOpen] = useState(defaultOpen);
  return <div className={bem('accordion-group', [], className)}>{items.map(item => {
    const expanded = open.includes(item.id); const id = `${prefix}-${item.id}`;
    return <div key={item.id}><div className={`accordion-item${expanded ? ' open' : ''}`}><button type="button" className="accordion-title" id={`${id}-title`} aria-controls={id} aria-expanded={expanded} onClick={() => setOpen(current => expanded ? current.filter(key => key !== item.id) : [...current, item.id])}>{item.title}</button><span aria-hidden="true">{expanded ? '−' : '+'}</span></div><div className="accordion-text" id={id} role="region" aria-labelledby={`${id}-title`} hidden={!expanded}>{item.content}</div></div>;
  })}</div>;
}
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
export function Breadcrumbs({ items, label = 'Breadcrumb' }: { items: { text: string; href?: string }[]; label?: string }) {
  return <nav className="breadcrumb flexgrid" aria-label={label}><ol>{items.map((item, i) => <li className="breadcrumb__item" key={i}>{item.href && i !== items.length - 1 ? <a className="breadcrumb__link" href={item.href}>{item.text}</a> : <span aria-current={i === items.length - 1 ? 'page' : undefined}>{item.text}</span>}{i < items.length - 1 && <span className="angle" aria-hidden="true"> / </span>}</li>)}</ol></nav>;
}
export function Pagination({ page, pageCount, onPageChange, label = 'Pagination' }: { page: number; pageCount: number; onPageChange: (page: number) => void; label?: string }) {
  if (pageCount < 1) return null;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1).filter(p => p === 1 || p === pageCount || Math.abs(p - page) <= 2);
  return <nav className="pager" aria-label={label}><ul className="pager__items"><li className="pager__item"><button type="button" className="pager__link" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>Previous</button></li>{pages.map((p, i) => <li key={p} className={`pager__item${page === p ? ' is-active' : ''}`}>{i > 0 && p - pages[i - 1] > 1 && <span aria-hidden="true">… </span>}<button type="button" className={`pager__link${page === p ? ' is-active' : ''}`} aria-label={`Page ${p}`} aria-current={page === p ? 'page' : undefined} onClick={() => onPageChange(p)}>{p}</button></li>)}<li className="pager__item"><button type="button" className="pager__link" disabled={page >= pageCount} onClick={() => onPageChange(page + 1)}>Next</button></li></ul></nav>;
}
type Field = { label: string; description?: ReactNode; error?: ReactNode };
function FieldWrapper({ id, label, description, error, children }: Field & { id: string; children: ReactNode }) {
  return <div className={`form-item${error ? ' form-item--error' : ''}`}><label className="form-item__label" htmlFor={id}>{label}</label>{children}{description && <div id={`${id}-description`} className="form-item__description">{description}</div>}{error && <div id={`${id}-error`} className="form-item--error-message">{error}</div>}</div>;
}
function describedBy(id: string, description: ReactNode, error: ReactNode, existing?: string) { return [existing, description ? `${id}-description` : '', error ? `${id}-error` : ''].filter(Boolean).join(' ') || undefined; }
export function TextField({ label, description, error, id: provided, ...props }: Field & InputHTMLAttributes<HTMLInputElement>) {
  const generated = useId(); const id = provided ?? generated;
  return <FieldWrapper {...{ id, label, description, error }}><input {...props} id={id} aria-invalid={error ? true : props['aria-invalid']} aria-describedby={describedBy(id, description, error, props['aria-describedby'])} /></FieldWrapper>;
}
export function Textarea({ label, description, error, id: provided, ...props }: Field & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const generated = useId(); const id = provided ?? generated;
  return <FieldWrapper {...{ id, label, description, error }}><textarea {...props} id={id} aria-invalid={error ? true : props['aria-invalid']} aria-describedby={describedBy(id, description, error, props['aria-describedby'])} /></FieldWrapper>;
}
export function Select({ label, description, error, id: provided, children, ...props }: Field & SelectHTMLAttributes<HTMLSelectElement>) {
  const generated = useId(); const id = provided ?? generated;
  return <FieldWrapper {...{ id, label, description, error }}><select {...props} id={id} aria-invalid={error ? true : props['aria-invalid']} aria-describedby={describedBy(id, description, error, props['aria-describedby'])}>{children}</select></FieldWrapper>;
}
export function Checkbox({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: ReactNode }) { return <label className="form-item"><input {...props} type="checkbox" /> {label}</label>; }
export function Radio({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: ReactNode }) { return <label className="form-item"><input {...props} type="radio" /> {label}</label>; }
export function PageHeader({ title, date }: { title: ReactNode; date?: ReactNode }) { return <div className="page-header"><Heading level={1} className="page-header__title">{title}</Heading>{date && <div className="page-header__date">{date}</div>}</div>; }
export function Section({ title, children, background, padding, margin, className, ...props }: HTMLAttributes<HTMLElement> & { title?: string; background?: string; padding?: 's'|'m'|'l'; margin?: 's'|'m'|'l' }) {
  return <section {...props} className={bem('section', [background ?? 'no-bg', background ? 'with-background' : '', padding ? `padding-${padding}` : '', margin ? `margin-${margin}` : ''], className)}><div className="flexgrid">{title && <div className="section__header"><Heading>{title}</Heading></div>}{children}</div></section>;
}
export function CardGroup({ children, columns = 3, className }: { children: ReactNode; columns?: 2|3|4; className?: string }) { return <div className={bem('card-group', [], `flexgrid-nm ${className ?? ''}`)}>{Children.map(children, child => <div className={`card col-sm-12 col-md-${columns === 4 ? 6 : 12} col-xl-${12 / columns} col-xxl-${12 / columns}`}>{child}</div>)}</div>; }
export function CallOutBox({ children, modifiers, className, ...props }: Base & HTMLAttributes<HTMLDivElement>) { return <div {...props} className={bem('call-out-box', modifiers, className)}>{children}</div>; }
