import type { Meta, StoryObj } from '@storybook/react-vite';
import { SocialLinks } from './SocialLinks';

const meta = { title: 'Molecules/social-links/SocialLinks', component: SocialLinks, args: { items: [{ label: 'Facebook', href: 'https://facebook.com' }, { label: 'Instagram', href: 'https://instagram.com' }] } } satisfies Meta<typeof SocialLinks>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
