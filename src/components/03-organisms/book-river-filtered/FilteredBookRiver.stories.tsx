import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilteredBookRiver } from './FilteredBookRiver';

const meta = { title: 'Organisms/book-river-filtered/FilteredBookRiver', component: FilteredBookRiver, args: { title: 'Discover books', rivers: [{ id: 'fiction', label: 'Fiction', books: [{ title: 'The next chapter' }] }, { id: 'nonfiction', label: 'Nonfiction', books: [{ title: 'Community history' }] }] } } satisfies Meta<typeof FilteredBookRiver>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
