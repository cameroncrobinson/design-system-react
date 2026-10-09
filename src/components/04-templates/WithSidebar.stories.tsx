import type { Meta, StoryObj } from '@storybook/react-vite';
import { WithSidebar } from './WithSidebar';
import { SidebarMenu } from '../02-molecules/menus/sidebar-menu/SidebarMenu';
const meta = { title: 'Templates/WithSidebar', component: WithSidebar, args: { sidebar: <SidebarMenu items={[{ label: 'Library', href: '#library' }]} />, children: <p>Primary content</p> } } satisfies Meta<typeof WithSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
