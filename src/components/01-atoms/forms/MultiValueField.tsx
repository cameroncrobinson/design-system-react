import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';
import { Button } from '../buttons/Button.js';
import { TextField } from './textfields/TextField.js';
import { Fieldset } from './Fieldset.js';

export function MultiValueField({ label, values, onChange }: { label: string; values: string[]; onChange: (values: string[]) => void }) { return <Fieldset legend={label}>{values.map((value, i) => <div key={i}><TextField label={label + ' ' + (i + 1)} value={value} onChange={event => onChange(values.map((v, j) => j === i ? event.target.value : v))} /><Button onClick={() => onChange(values.filter((_, j) => j !== i))}>Remove entry {i + 1}</Button></div>)}<Button onClick={() => onChange([...values, ''])}>Add entry</Button></Fieldset>; }
