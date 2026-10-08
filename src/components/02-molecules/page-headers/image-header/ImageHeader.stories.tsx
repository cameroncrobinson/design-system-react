import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageHeader } from './ImageHeader';

const meta = { title: 'Molecules/page-headers/image-header/ImageHeader', component: ImageHeader, args: { title: 'Community leadership', subtitle: 'Working together', image: { src: 'https://picsum.photos/seed/person/450/450', alt: 'Community representative' }, bio: { name: 'Alex Smith', title: 'Community director' } } } satisfies Meta<typeof ImageHeader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
