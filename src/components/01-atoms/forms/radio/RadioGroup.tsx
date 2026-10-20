import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.tsx';
import type { Base } from '../../../../shared.tsx';
import { Radio } from './Radio.js';
import { Fieldset } from '../Fieldset.js';

export function RadioGroup({ legend, name, options }: { legend: string; name: string; options: { label: string; value: string; checked?: boolean }[] }) { return <Fieldset legend={legend}>{options.map(option => <Radio key={option.value} name={name} value={option.value} label={option.label} defaultChecked={option.checked} />)}</Fieldset>; }
