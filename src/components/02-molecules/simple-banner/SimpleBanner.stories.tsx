import type { Meta, StoryObj } from '@storybook/react-vite';
import { SimpleBanner } from './SimpleBanner';

const meta = { title: 'Molecules/simple-banner/SimpleBanner', component: SimpleBanner, args: { children: <p>Welcome to your community.</p> } } satisfies Meta<typeof SimpleBanner>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
