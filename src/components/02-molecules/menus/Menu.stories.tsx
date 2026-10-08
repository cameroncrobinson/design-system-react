import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './Menu';

const meta = { title: 'Molecules/menus/Menu', component: Menu, args: { items: [{ label: 'Home', href: '#home', active: true }, { label: 'Services', href: '#services', children: [{ label: 'Library', href: '#library' }] }] } } satisfies Meta<typeof Menu>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
