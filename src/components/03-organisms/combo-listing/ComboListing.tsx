import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';


export function ComboListing({ left, right }: { left: ReactNode; right: ReactNode }) { return <div className="combo-listing flexgrid-nm"><div className="combo-listing__card col-xxl-6 col-l-12">{left}</div><div className="combo-listing__card col-xxl-6 col-l-12">{right}</div></div>; }
