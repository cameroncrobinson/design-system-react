import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Button } from '../../01-atoms/buttons/Button.js';

export function Motion() { const [expanded, setExpanded] = useState(false); return <div><Button onClick={() => setExpanded(!expanded)}>Toggle motion</Button><div style={{ width: expanded ? 200 : 80, height: 80, background: 'var(--c-primary-1)', transition: 'width 300ms ease' }} /></div>; }
