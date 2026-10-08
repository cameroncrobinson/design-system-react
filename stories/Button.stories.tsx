import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../src/index';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  args: { children: 'Primary action' }
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Secondary: Story = { args: { modifiers: ['secondary'], children: 'Secondary action' } };
export const Link: Story = { args: { href: '#services', children: 'Browse services', cta: true } };
export const Disabled: Story = { args: { disabled: true } };

