import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Section } from '../../02-molecules/section/Section.js';
import { ImageHeader } from '../../02-molecules/page-headers/image-header/ImageHeader.js';
import { IconCardGroup } from '../../03-organisms/icon-card-group/IconCardGroup.js';
import { FullWidth } from '../../04-templates/FullWidth.js';
import type { LayoutProps } from '../../04-templates/DefaultLayout.js';
export function DepartmentPage({ pageHeader, services, children, ...layout }: Omit<LayoutProps, 'children'> & { pageHeader: ComponentProps<typeof ImageHeader>; services?: ComponentProps<typeof IconCardGroup>; children: ReactNode }) { return <FullWidth {...layout} system={<>{layout.system}<ImageHeader {...pageHeader} /></>}><div className="department">{services && <Section title="Featured services" background="primary-4"><IconCardGroup {...services} /></Section>}{children}</div></FullWidth>; }
