import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.tsx';
import type { Base } from '../../../../shared.tsx';
import { Card } from '../../card/Card.js';
import type { CardProps } from '../../card/Card.js';
export function LibraryHorizontalCard({ borderTop, ...props }: CardProps & { borderTop?: boolean }) { return <div className={bem('lib_horizontal_card', [props.image ? '' : 'no-image', borderTop ? 'border-top' : ''])}><Card {...props} /></div>; }
