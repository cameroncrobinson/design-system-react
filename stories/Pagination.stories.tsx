import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from '../src/index';

const meta = {
  title: 'Molecules/Pagination',
  component: Pagination,
  args: { page: 1, pageCount: 12, onPageChange: () => {} }
} satisfies Meta<typeof Pagination>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Interactive: Story = { render: args => { const [page, setPage] = useState(args.page); return <Pagination {...args} page={page} onPageChange={setPage} />; } };

