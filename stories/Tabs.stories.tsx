import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from '../src/index';

const meta = {
  title: 'Molecules/Tabs',
  component: Tabs,
  args: { label: 'Community information', items: [{ id: 'services', title: 'Services', content: <p>Explore community services.</p> }, { id: 'events', title: 'Events', content: <p>Find upcoming activities.</p> }] }
} satisfies Meta<typeof Tabs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};


