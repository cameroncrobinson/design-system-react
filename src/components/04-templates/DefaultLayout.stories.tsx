import type { Meta, StoryObj } from '@storybook/react-vite';
import { DefaultLayout } from './DefaultLayout';
import { SiteHeader } from '../03-organisms/site/site-header/SiteHeader';
import { SiteFooter } from '../03-organisms/site/site-footer/SiteFooter';
const meta = { title: 'Templates//DefaultLayout', component: DefaultLayout, args: { header: <SiteHeader branding="Community" items={[{ label: 'Services', href: '#services' }]} />, children: <p>Primary content</p>, footer: <SiteFooter branding="Community" copyright="© 2026" /> } } satisfies Meta<typeof DefaultLayout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
