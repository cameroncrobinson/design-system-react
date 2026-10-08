import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '../src/index';

const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
  args: { label: 'Message', rows: 4 }
} satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Error: Story = { args: { error: 'Enter a message.' } };

