import type { Meta, StoryObj } from '@storybook/react-vite';
import { HomeHeader } from './HomeHeader';
import { IconCard } from '../../icon-card/IconCard';
const meta = { title: 'Molecules/page-headers/home-header/HomeHeader', component: HomeHeader, args: { image: 'https://picsum.photos/seed/home/1200/500', featured: <IconCard title="Explore your community" icon="◇" href="#community" /> } } satisfies Meta<typeof HomeHeader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
