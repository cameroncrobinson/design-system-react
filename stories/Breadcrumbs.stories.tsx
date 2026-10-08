import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from '../src/index';

const meta = {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  args: { items: [{ text: 'Home', href: '#home' }, { text: 'Services', href: '#services' }, { text: 'Library' }] }
} satisfies Meta<typeof Breadcrumbs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};


