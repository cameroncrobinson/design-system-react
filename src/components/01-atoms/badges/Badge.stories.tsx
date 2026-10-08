import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../../../index';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  args: { children: 'Community', label: 'Category' }
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Lighter: Story = { args: { lighter: true } };

