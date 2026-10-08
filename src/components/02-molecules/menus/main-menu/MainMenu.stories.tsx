import type { Meta, StoryObj } from '@storybook/react-vite';
import { MainMenu } from './MainMenu';

const meta = { title: 'Molecules/menus/main-menu/MainMenu', component: MainMenu, args: { items: [{ label: 'Home', href: '#home' }, { label: 'Services', href: '#services', children: [{ label: 'Library', href: '#library' }] }] } } satisfies Meta<typeof MainMenu>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
