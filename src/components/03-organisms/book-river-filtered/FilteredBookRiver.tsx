import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';
import { Tabs } from '../../02-molecules/tabs/Tabs.js';
import { Section } from '../../02-molecules/section/Section.js';
import { Book } from '../../02-molecules/book/Book.js';
import { BookRiver } from '../book-river/BookRiver.js';
import type { BookProps } from '../../02-molecules/book/Book.js';
export function FilteredBookRiver({ title, rivers }: { title: string; rivers: { id: string; label: string; books: BookProps[] }[] }) { return <Section title={title}><div className="rivers-container"><Tabs label="Book categories" items={rivers.map(river => ({ id: river.id, title: river.label, content: <BookRiver books={river.books} /> }))} /></div></Section>; }
