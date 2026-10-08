import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchHeader } from './SearchHeader';

const meta = { title: 'Molecules/page-headers/search-header/SearchHeader', component: SearchHeader, args: { title: 'Search' } } satisfies Meta<typeof SearchHeader>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
