import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';

const meta = { title: 'Atoms/icon/Icon', component: Icon, args: { children: '◇', label: 'Community' } } satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
