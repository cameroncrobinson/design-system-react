import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';


export function Grid({ children, columns = 3 }: { children: ReactNode; columns?: 1|2|3|4|6|12 }) { return <div className="flexgrid-nm">{Children.map(children, child => <div className={'col-sm-12 col-l-' + 12 / columns + ' col-xxl-' + 12 / columns}>{child}</div>)}</div>; }
