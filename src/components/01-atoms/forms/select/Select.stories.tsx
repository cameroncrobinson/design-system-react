import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from '../../../../index';

const meta = {
  title: 'Atoms/Select',
  component: Select,
  args: { label: 'Topic', children: <><option value="services">Services</option><option value="events">Events</option></> }
} satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};


