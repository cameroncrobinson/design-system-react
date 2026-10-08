import type { Meta, StoryObj } from '@storybook/react-vite';
import { Book } from './Book';

const meta = { title: 'Molecules/book/Book', component: Book, args: { title: 'A community story', author: 'Jane Smith', href: '#book' } } satisfies Meta<typeof Book>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
