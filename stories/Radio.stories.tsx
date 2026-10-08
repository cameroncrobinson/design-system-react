import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from '../src/index';

const meta = {
  title: 'Atoms/Radio',
  component: Radio,
  args: { label: 'Email', name: 'contact', value: 'email' }
} satisfies Meta<typeof Radio>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Group: Story = { render: () => <fieldset><legend>Contact method</legend><Radio name="contact" value="email" label="Email" /><Radio name="contact" value="phone" label="Phone" /></fieldset> };

