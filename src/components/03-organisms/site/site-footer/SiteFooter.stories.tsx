import type { Meta, StoryObj } from '@storybook/react-vite';
import { SiteFooter } from './SiteFooter';

const meta = { title: 'Organisms/site/site-footer/SiteFooter', component: SiteFooter, args: { branding: 'Community', title: 'Contact us', contacts: <p>100 Main Street</p>, copyright: '© 2026 Community', links: [{ label: 'Privacy', href: '#privacy' }] } } satisfies Meta<typeof SiteFooter>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
