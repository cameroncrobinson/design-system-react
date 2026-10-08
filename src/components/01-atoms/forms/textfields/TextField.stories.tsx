import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from '../../../../index';

const meta = {
  title: 'Atoms/TextField',
  component: TextField,
  args: { label: 'Name', name: 'name', description: 'Enter your full name.' }
} satisfies Meta<typeof TextField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Error: Story = { args: { error: 'This field is required.' } };
export const Disabled: Story = { args: { disabled: true } };

