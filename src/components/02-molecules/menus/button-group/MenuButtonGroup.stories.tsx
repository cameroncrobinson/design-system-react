import type { Meta, StoryObj } from '@storybook/react-vite';
import { MenuButtonGroup } from './MenuButtonGroup';

const meta = { title: 'Molecules/menus/button-group/MenuButtonGroup', component: MenuButtonGroup, args: { items: [{ label: 'Services', href: '#services' }, { label: 'Events', href: '#events' }] } } satisfies Meta<typeof MenuButtonGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
