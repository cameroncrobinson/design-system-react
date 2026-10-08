import type { Meta, StoryObj } from '@storybook/react-vite';
import { PhotoGallery } from './PhotoGallery';

const meta = { title: 'Molecules/photo-gallery/PhotoGallery', component: PhotoGallery, args: { items: [{ src: 'https://picsum.photos/seed/park/600/400', alt: 'Community park', caption: 'Community park' }, { src: 'https://picsum.photos/seed/library/600/400', alt: 'Library' }] } } satisfies Meta<typeof PhotoGallery>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
