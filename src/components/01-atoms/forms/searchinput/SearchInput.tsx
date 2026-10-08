import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.js';
import type { Base } from '../../../../shared.js';
import { Button } from '../../buttons/Button.js';
import { TextField } from '../textfields/TextField.js';

export function SearchInput({ label = 'Search', onSearch, ...props }: Omit<ComponentProps<typeof TextField>, 'label'> & { label?: string; onSearch?: (query: string) => void }) { return <form role="search" onSubmit={event => { event.preventDefault(); onSearch?.(String(new FormData(event.currentTarget).get('query') ?? '')); }}><TextField {...props} type="search" name="query" label={label} /><Button type="submit">Search</Button></form>; }
