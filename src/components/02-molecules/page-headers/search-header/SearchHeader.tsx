import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.js';
import type { Base } from '../../../../shared.js';
import { Heading } from '../../../01-atoms/text/headings/Heading.js';
import { SearchInput } from '../../../01-atoms/forms/searchinput/SearchInput.js';

export function SearchHeader({ title = 'Search', onSearch }: { title?: string; onSearch?: (query: string) => void }) { return <div className="search-header"><div className="flexgrid"><div className="search-header__title col-xxl-3 col-l-12"><Heading level={1}>{title}</Heading></div><div className="search-header__input col-xxl-9 col-l-12"><SearchInput onSearch={onSearch} /></div></div></div>; }
