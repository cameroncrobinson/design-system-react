import { Children, Fragment, useId, useState, useRef, useEffect } from 'react';
import type { ReactNode, ComponentProps, HTMLAttributes, AnchorHTMLAttributes, ImgHTMLAttributes, SVGProps, VideoHTMLAttributes, FieldsetHTMLAttributes, LabelHTMLAttributes } from 'react';
import { bem } from '../../../shared.js';
import type { Base } from '../../../shared.js';
import { Section } from '../../02-molecules/section/Section.js';
import { HowDoI } from '../../02-molecules/how-do-i/HowDoI.js';
import { HeroHeader } from '../../02-molecules/page-headers/hero-header/HeroHeader.js';
import { IconCardGroup } from '../../03-organisms/icon-card-group/IconCardGroup.js';
import { CardListing } from '../../03-organisms/card-listing/CardListing.js';
import { EventListing } from '../../03-organisms/event-listing/EventListing.js';
import { FullWidth } from '../../04-templates/FullWidth.js';
import type { LayoutProps } from '../../04-templates/DefaultLayout.js';
export function HomePage({ hero, services, actions, news, events, ...layout }: Omit<LayoutProps, 'children'> & { hero: ComponentProps<typeof HeroHeader>; services?: ComponentProps<typeof IconCardGroup>; actions?: ComponentProps<typeof HowDoI>; news?: ComponentProps<typeof CardListing>; events?: ComponentProps<typeof EventListing> }) { return <FullWidth {...layout} system={<>{layout.system}<HeroHeader {...hero} /></>}>{services && <Section title="Featured services"><IconCardGroup {...services} /></Section>}{actions && <Section title="I want to"><HowDoI {...actions} /></Section>}{news && <Section><CardListing {...news} /></Section>}{events && <Section><EventListing {...events} /></Section>}</FullWidth>; }
