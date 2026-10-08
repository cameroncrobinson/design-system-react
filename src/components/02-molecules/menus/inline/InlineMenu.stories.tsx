import type { Meta, StoryObj } from '@storybook/react-vite';
import { InlineMenu } from './InlineMenu';

const meta = { title: 'Molecules/menus/inline/InlineMenu', component: InlineMenu, args: { items: [{ label: 'Services', href: '#services' }, { label: 'Events', href: '#events' }] } } satisfies Meta<typeof InlineMenu>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
