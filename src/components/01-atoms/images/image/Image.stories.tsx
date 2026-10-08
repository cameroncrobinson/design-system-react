import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from './Image';

const meta = { title: 'Atoms/images/image/Image', component: Image, args: { src: 'https://picsum.photos/seed/community/600/400', alt: 'Community landscape' } } satisfies Meta<typeof Image>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
