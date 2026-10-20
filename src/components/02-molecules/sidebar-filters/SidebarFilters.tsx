import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Button } from '../../01-atoms/buttons/Button.js';
import { Accordion } from '../accordions/Accordion.js';

export function SidebarFilters({ title = 'Filter results', children, onApply }: { title?: string; children: ReactNode; onApply?: () => void }) { return <div className="sidebar-filters"><Accordion defaultOpen={['filters']} items={[{ id: 'filters', title, content: <form onSubmit={event => { event.preventDefault(); onApply?.(); }}>{children}<Button type="submit">Apply filters</Button></form> }]} /></div>; }
