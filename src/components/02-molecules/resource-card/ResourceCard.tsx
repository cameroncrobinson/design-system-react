import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Heading } from '../../01-atoms/text/headings/Heading.js';
import { Badge } from '../../01-atoms/badges/Badge.js';
import { Image } from '../../01-atoms/images/image/Image.js';
import type { CardProps } from '../card/Card.js';
export function ResourceCard({ title, href, image, children, audience, resourceType }: CardProps & { audience?: ReactNode; resourceType?: ReactNode }) { return <div className={bem('resource_card', image ? [] : ['no-image'])}>{image && <a href={href}><Image {...image} className="resource_card__image" /></a>}<div className="resource_card__content"><Heading level={3} href={href}>{title}</Heading>{children}{audience && <Badge label="Audience" lighter>{audience}</Badge>}{resourceType && <Badge label="Type" lighter>{resourceType}</Badge>}</div></div>; }
