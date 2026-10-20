import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { PageHeader } from '../../02-molecules/page-headers/page-header/PageHeader.js';
import { CallOutBox } from '../../02-molecules/call-out-box/CallOutBox.js';
import { Image } from '../../01-atoms/images/image/Image.js';
import { RichText } from '../../02-molecules/rich-text/RichText.js';
import { DefaultLayout } from '../../04-templates/DefaultLayout.js';
import type { LayoutProps } from '../../04-templates/DefaultLayout.js';
export function ArticlePage({ title, date, image, badges, callOut, children, ...layout }: Omit<LayoutProps, 'children'> & { title: string; date?: string; image?: { src: string; alt: string }; badges?: ReactNode; callOut?: ReactNode; children: ReactNode }) { return <DefaultLayout {...layout}><PageHeader title={title} date={date} /><div className="article flexgrid-nm"><div className="article__main-content col-xxl-7 col-l-12"><RichText>{children}</RichText>{badges && <div className="badge-group">{badges}</div>}{callOut && <CallOutBox>{callOut}</CallOutBox>}</div>{image && <div className="article__image col-xxl-5 col-l-12"><Image {...image} /></div>}</div></DefaultLayout>; }
