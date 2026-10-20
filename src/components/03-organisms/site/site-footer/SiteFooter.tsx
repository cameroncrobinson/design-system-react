import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.tsx';
import type { Base } from '../../../../shared.tsx';
import { Heading } from '../../../01-atoms/text/headings/Heading.js';
import { Menu } from '../../../02-molecules/menus/Menu.js';
import type { MenuItem } from '../../../02-molecules/menus/Menu.js';
export function SiteFooter({ branding, title, contacts, social, copyright, links = [], poweredBy }: { branding: ReactNode; title?: string; contacts?: ReactNode; social?: ReactNode; copyright?: string; links?: MenuItem[]; poweredBy?: ReactNode }) { return <footer className="footer"><div className="footer__inner flexgrid"><div className="footer__branding col-md-12 col-l-3 col-xxl-3">{branding}</div><div className="footer__section_one col-md-12 col-l-9 col-xxl-9">{title && <Heading>{title}</Heading>}<div className="footer__section_one__menu flexgrid-nm">{contacts}{social}</div></div><div className="footer__section_two col-l-12 col-xxl-7"><p>{copyright}</p><Menu items={links} baseClass="section_two__menu" /></div>{poweredBy && <div className="footer__powered-by col-l-12 col-xxl-5">{poweredBy}</div>}</div></footer>; }
