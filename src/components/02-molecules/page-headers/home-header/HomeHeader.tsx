import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.js';
import type { Base } from '../../../../shared.js';


export function HomeHeader({ image, featured }: { image: string; featured: ReactNode }) { return <div className="home-header" style={{ backgroundImage: 'url(' + JSON.stringify(image) + ')' }}><div className="home-header__container home-header__container--image flexgrid"><div className="featured-link col-md-12 col-l-6 col-xl-4 col-xxl-4">{featured}</div></div></div>; }
