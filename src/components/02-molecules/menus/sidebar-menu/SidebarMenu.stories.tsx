import type { Meta, StoryObj } from '@storybook/react-vite';
import { SidebarMenu } from './SidebarMenu';

const meta = { title: 'Molecules/menus/sidebar-menu/SidebarMenu', component: SidebarMenu, args: { items: [{ label: 'Services', href: '#services' }, { label: 'Events', href: '#events' }] } } satisfies Meta<typeof SidebarMenu>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
