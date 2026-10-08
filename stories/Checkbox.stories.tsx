import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../src/index';

const meta = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  args: { label: 'Send me updates', name: 'updates' }
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };

