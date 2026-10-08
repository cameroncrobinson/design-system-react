import type { Meta, StoryObj } from '@storybook/react-vite';
import { BookRiver } from './BookRiver';

const meta = { title: 'Organisms/book-river/BookRiver', component: BookRiver, args: { books: [{ title: 'A community story', author: 'Jane Smith' }, { title: 'The next chapter', author: 'Alex Jones' }] } } satisfies Meta<typeof BookRiver>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
