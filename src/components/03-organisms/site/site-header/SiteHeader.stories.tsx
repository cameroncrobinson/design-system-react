import type { Meta, StoryObj } from '@storybook/react-vite';
import { SiteHeader } from './SiteHeader';

const meta = { title: 'Organisms/site/site-header/SiteHeader', component: SiteHeader, args: { branding: <a href="#home">Community</a>, items: [{ label: 'Services', href: '#services' }, { label: 'Events', href: '#events' }], top: <a href="#contact">Contact us</a> } } satisfies Meta<typeof SiteHeader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
