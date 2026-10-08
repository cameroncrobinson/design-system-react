import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from '../../../../index';

const meta = {
  title: 'Atoms/Heading',
  component: Heading,
  args: { children: 'Community services', level: 2 }
} satisfies Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const PageTitle: Story = { args: { level: 1 } };

