import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from './Table';

const meta = { title: 'Atoms/tables/Table', component: Table, args: { caption: 'Opening hours', columns: ['Day', 'Hours'], rows: [['Monday', '9am–5pm'], ['Tuesday', '9am–5pm']] } } satisfies Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
