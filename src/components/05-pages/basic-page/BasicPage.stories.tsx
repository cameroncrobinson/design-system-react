import type { Meta, StoryObj } from '@storybook/react-vite';
import { BasicPage } from './BasicPage';
import { RichText } from '../../02-molecules/rich-text/RichText';
import { SidebarMenu } from '../../02-molecules/menus/sidebar-menu/SidebarMenu';
const meta = { title: 'Pages/basic-page/BasicPage', component: BasicPage, args: { title: 'Community services', sidebar: <SidebarMenu items={[{ label: 'Library', href: '#library' }]} />, children: <RichText title="Our services"><p>Explore the resources available to you.</p></RichText> } } satisfies Meta<typeof BasicPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
