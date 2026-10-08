import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCard } from '../../../index';

const meta = {
  title: 'Molecules/IconCard',
  component: IconCard,
  args: { title: 'Explore the library', href: '#library', icon: '◇', children: <p>Find resources and support.</p>, cta: true }
} satisfies Meta<typeof IconCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Unlinked: Story = { args: { href: undefined } };

