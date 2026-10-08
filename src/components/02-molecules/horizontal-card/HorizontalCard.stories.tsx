import type { Meta, StoryObj } from '@storybook/react-vite';
import { HorizontalCard } from './HorizontalCard';

const meta = { title: 'Molecules/horizontal-card/HorizontalCard', component: HorizontalCard, args: { title: 'Community news', href: '#news', children: <p>The latest updates.</p> } } satisfies Meta<typeof HorizontalCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
