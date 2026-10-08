import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.js';
import type { Base } from '../../../../shared.js';
import { Heading } from '../../../01-atoms/text/headings/Heading.js';
import { Figure } from '../../../01-atoms/images/image/Figure.js';
import { Menu } from '../../menus/Menu.js';
import type { MenuItem } from '../../menus/Menu.js';
export function ImageHeader({ title, subtitle, image, bio, links = [], featured }: { title: string; subtitle?: string; image?: { src: string; alt: string }; bio?: { name: string; title: string }; links?: MenuItem[]; featured?: ReactNode }) { return <div className="image-page-header flexgrid"><div className="image-page-header__content col-l-6 col-xxl-6"><div className="content__upper-section"><Heading level={1} className="image-page-header__title">{title}</Heading>{subtitle && <p className="image-page-header__subheading">{subtitle}</p>}<Menu items={links} baseClass="image-page-header__menu" /></div>{featured && <div className="content__icon-card">{featured}</div>}</div>{image && <div className={bio ? 'image-page-header__bio col-l-3 col-xxl-3' : 'image-page-header__image col-l-6 col-xxl-6'}><Figure image={image} />{bio && <div className="bio__info"><div className="bio__info__name">{bio.name}</div><div className="bio__info__description">{bio.title}</div></div>}</div>}</div>; }
