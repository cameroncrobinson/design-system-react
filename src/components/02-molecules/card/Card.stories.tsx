import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../../../index';

const meta = {
  title: 'Molecules/Card',
  component: Card,
  args: { title: 'Community services', href: '#services', children: <p>Helpful resources for residents.</p> }
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Background: Story = { args: { background: true, tags: 'Community' } };

