import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section } from '../../../index';

const meta = {
  title: 'Molecules/section/Section',
  component: Section,
  args: { title: 'Featured services', padding: 'm', children: <p>Discover resources and services.</p> }
} satisfies Meta<typeof Section>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};


