import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.tsx';
import type { Base } from '../../../../shared.tsx';


export function FormLabel({ required, children, ...props }: LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) { return <label {...props}>{children}{required && <span aria-hidden="true"> *</span>}</label>; }
