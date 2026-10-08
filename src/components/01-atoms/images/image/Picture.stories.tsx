import type { Meta, StoryObj } from '@storybook/react-vite';
import { Picture } from './Picture';

const meta = { title: 'Atoms/images/image/Picture', component: Picture, args: { image: { src: 'https://picsum.photos/seed/community/600/400', alt: 'Community landscape' } } } satisfies Meta<typeof Picture>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
