import type { Meta, StoryObj } from '@storybook/react-vite';
import { Figure } from './Figure';

const meta = { title: 'Atoms/images/image/Figure', component: Figure, args: { image: { src: 'https://picsum.photos/seed/community/600/400', alt: 'Community landscape' }, caption: 'Our community' } } satisfies Meta<typeof Figure>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
