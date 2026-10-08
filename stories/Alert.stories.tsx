import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from '../src/index';

const meta = {
  title: 'Molecules/Alert',
  component: Alert,
  args: { title: 'Service update', children: 'Find the latest information here.', dismissible: true }
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Emergency: Story = { args: { level: 'emergency', title: 'Emergency notice' } };
export const NonEmergency: Story = { args: { level: 'non-emergency' } };

