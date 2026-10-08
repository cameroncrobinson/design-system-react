import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';


export function Fieldset({ legend, children, ...props }: FieldsetHTMLAttributes<HTMLFieldSetElement> & { legend: ReactNode }) { return <fieldset {...props}><legend>{legend}</legend>{children}</fieldset>; }
