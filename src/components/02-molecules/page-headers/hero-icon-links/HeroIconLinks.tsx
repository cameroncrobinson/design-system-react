import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.js';
import type { Base } from '../../../../shared.js';


export function HeroIconLinks({ image, children }: { image: string; children: ReactNode }) { return <div className="hero-container flexgrid-nm"><div className="hero-icon-links col-xl-12 col-xxl-8" style={{ backgroundImage: 'url(' + JSON.stringify(image) + ')' }} /><div className="header-icon-links col-xl-12 col-xxl-4">{children}</div></div>; }
