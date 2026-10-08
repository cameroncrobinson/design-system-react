import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';


export function SocialLinks({ items }: { items: { label: string; href: string; icon?: ReactNode }[] }) { return <ul className="social-links">{items.map(item => <li className="social-links__item" key={item.href}><a href={item.href} aria-label={item.label}>{item.icon ?? item.label}</a></li>)}</ul>; }
