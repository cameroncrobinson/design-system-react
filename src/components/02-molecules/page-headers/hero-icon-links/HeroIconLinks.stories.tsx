import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeroIconLinks } from './HeroIconLinks';
import { IconCard } from '../../icon-card/IconCard';
const meta = { title: 'Molecules/page-headers/hero-icon-links/HeroIconLinks', component: HeroIconLinks, args: { image: 'https://picsum.photos/seed/hero/1200/500', children: <IconCard title="Library" href="#library" icon="◇">Find books and resources.</IconCard> } } satisfies Meta<typeof HeroIconLinks>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
