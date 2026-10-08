import type { Meta, StoryObj } from '@storybook/react-vite';
import { OrderedList } from './OrderedList';

const meta = { title: 'Atoms/lists/OrderedList', component: OrderedList, args: { items: ['Apply', 'Review', 'Confirm'] } } satisfies Meta<typeof OrderedList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
