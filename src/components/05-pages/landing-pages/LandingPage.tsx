import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.tsx';
import type { Base } from '../../../shared.tsx';
import { Section } from '../../02-molecules/section/Section.js';
import { HeroHeader } from '../../02-molecules/page-headers/hero-header/HeroHeader.js';
import { IconCardGroup } from '../../03-organisms/icon-card-group/IconCardGroup.js';
import { FullWidth } from '../../04-templates/FullWidth.js';
import type { LayoutProps } from '../../04-templates/DefaultLayout.js';
export function LandingPage({ hero, cta, services, children, ...layout }: Omit<LayoutProps, 'children'> & { hero: ComponentProps<typeof HeroHeader>; cta?: ReactNode; services?: ComponentProps<typeof IconCardGroup>; children?: ReactNode }) { return <FullWidth {...layout} system={<>{layout.system}<HeroHeader {...hero} /></>}>{cta && <Section>{cta}</Section>}{services && <Section title="Featured services"><IconCardGroup {...services} /></Section>}{children}</FullWidth>; }
