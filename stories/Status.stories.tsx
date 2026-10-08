import type { Meta, StoryObj } from '@storybook/react-vite';
import { Status } from '../src/index';

const meta = {
  title: 'Molecules/Status',
  component: Status,
  args: { messages: ['Your changes have been saved.'] }
} satisfies Meta<typeof Status>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Error: Story = { args: { type: 'error', messages: ['Unable to save changes.'] } };

