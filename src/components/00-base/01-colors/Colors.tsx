import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';


export function Colors({ names = ['primary-1','primary-2','primary-3','accent-1','tone-1','tone-9'] }: { names?: string[] }) { return <ul className="cl-colors__list">{names.map(name => <li key={name} style={{ padding: '1rem' }}><div style={{ width: 100, height: 80, backgroundColor: 'var(--c-' + name + ')', border: '1px solid #ccc' }} />{name}</li>)}</ul>; }
