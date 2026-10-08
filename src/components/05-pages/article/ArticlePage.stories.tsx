import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArticlePage } from './ArticlePage';
import { Badge } from '../../01-atoms/badges/Badge';
const meta = { title: 'Pages/article/ArticlePage', component: ArticlePage, args: { title: 'Community update', date: 'October 8, 2026', children: <p>Latest news from across the community.</p>, badges: <Badge label="Category">News</Badge> } } satisfies Meta<typeof ArticlePage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
