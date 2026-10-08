import type { Meta, StoryObj } from '@storybook/react-vite';
import { Motion } from './Motion';

const meta = { title: 'Base/02-motion/Motion', component: Motion, args: {} } satisfies Meta<typeof Motion>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
