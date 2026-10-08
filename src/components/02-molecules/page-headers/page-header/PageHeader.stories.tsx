import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageHeader } from '../../../../index';

const meta = {
  title: 'Molecules/PageHeader',
  component: PageHeader,
  args: { title: 'Community services', date: 'October 8, 2026' }
} satisfies Meta<typeof PageHeader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};


