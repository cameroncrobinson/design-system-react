import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../../shared.tsx';
import type { Base } from '../../../../shared.tsx';
import { Checkbox } from './Checkbox.js';
import { Fieldset } from '../Fieldset.js';

export function CheckboxGroup({ legend, name, options }: { legend: string; name: string; options: { label: string; value: string; checked?: boolean }[] }) { return <Fieldset legend={legend}>{options.map(option => <Checkbox key={option.value} name={name} value={option.value} label={option.label} defaultChecked={option.checked} />)}</Fieldset>; }
