import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatCard } from '../src/index';

const meta = {
  title: 'Molecules/StatCard',
  component: StatCard,
  args: { stat: '24', description: 'Community locations', icon: '◇' }
} satisfies Meta<typeof StatCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};


