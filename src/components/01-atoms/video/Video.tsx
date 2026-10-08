import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';


export function Video({ sources = [], tracks = [], title, ...props }: VideoHTMLAttributes<HTMLVideoElement> & { sources?: { src: string; type?: string }[]; tracks?: { src: string; kind?: 'captions'|'subtitles'|'descriptions'; srcLang?: string; label?: string }[]; title?: string }) { return <div className="video"><video controls {...props} aria-label={title}>{sources.map((source, i) => <source key={i} {...source} />)}{tracks.map((track, i) => <track key={i} {...track} />)}</video></div>; }
