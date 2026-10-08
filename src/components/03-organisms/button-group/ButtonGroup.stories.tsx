import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonGroup } from './ButtonGroup';

const meta = { title: 'Organisms/button-group/ButtonGroup', component: ButtonGroup, args: { items: [{ children: 'Services', href: '#services' }, { children: 'Events', href: '#events' }] } } satisfies Meta<typeof ButtonGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
