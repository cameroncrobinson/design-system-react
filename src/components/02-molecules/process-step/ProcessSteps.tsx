import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Heading } from '../../01-atoms/text/headings/Heading.js';

export function ProcessSteps({ steps, margin }: { steps: { title: string; body: ReactNode }[]; margin?: string }) { return <div className={bem('process-steps', margin ? ['margin-' + margin] : [])}>{steps.map((step, i) => <div className="step" key={i}><div className="number">{i + 1}</div><div className="content"><Heading level={3}>{step.title}</Heading>{step.body}</div></div>)}</div>; }
