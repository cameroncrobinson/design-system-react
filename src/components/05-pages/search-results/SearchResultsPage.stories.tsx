import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchResultsPage } from './SearchResultsPage';
import { Checkbox } from '../../01-atoms/forms/checkbox/Checkbox';
import { HorizontalCard } from '../../02-molecules/horizontal-card/HorizontalCard';
const meta = { title: 'Pages/search-results/SearchResultsPage', component: SearchResultsPage, args: { summary: 'Showing 1–8 of 24 results', filters: <Checkbox label="News" />, results: <HorizontalCard title="Community news"><p>The latest updates.</p></HorizontalCard>, page: 1, pageCount: 3, onPageChange: () => {} } } satisfies Meta<typeof SearchResultsPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
