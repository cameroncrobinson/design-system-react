import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateDisplay } from './DateDisplay';

const meta = { title: 'Atoms/date/DateDisplay', component: DateDisplay, args: { dateTime: '2026-10-08', children: 'October 8, 2026' } } satisfies Meta<typeof DateDisplay>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
