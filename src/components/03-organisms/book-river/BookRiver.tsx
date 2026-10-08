import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';
import { Book } from '../../02-molecules/book/Book.js';
import type { BookProps } from '../../02-molecules/book/Book.js';
export function BookRiver({ books }: { books: BookProps[] }) { const ref = useRef<HTMLDivElement>(null); return <><div ref={ref} className="book-river">{books.map((book, i) => <Book {...book} key={i} />)}</div><div className="button-container"><button type="button" className="scroll-button" aria-label="Scroll books forward" onClick={() => ref.current?.scrollBy({ left: ref.current.clientWidth, behavior: 'smooth' })}>→</button></div></>; }
