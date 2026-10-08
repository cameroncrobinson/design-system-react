import type { Meta, StoryObj } from '@storybook/react-vite';
import { Video } from './Video';

const meta = { title: 'Atoms/video/Video', component: Video, args: { title: 'Community video' } } satisfies Meta<typeof Video>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
