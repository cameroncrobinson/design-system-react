import type { Meta, StoryObj } from '@storybook/react-vite';
import { CallOutBox } from '../src/index';

const meta = {
  title: 'Molecules/CallOutBox',
  component: CallOutBox,
  args: { children: <><h3>Need help?</h3><p>Contact your local community team.</p></> }
} satisfies Meta<typeof CallOutBox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};


