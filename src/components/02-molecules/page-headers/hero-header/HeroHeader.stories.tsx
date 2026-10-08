import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeroHeader } from './HeroHeader';

const meta = { title: 'Molecules/page-headers/hero-header/HeroHeader', component: HeroHeader, args: { title: 'Welcome to your community', subtitle: 'Discover services and resources', image: 'https://picsum.photos/seed/community/1200/500' } } satisfies Meta<typeof HeroHeader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
