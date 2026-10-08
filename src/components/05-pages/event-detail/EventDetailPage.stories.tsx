import type { Meta, StoryObj } from '@storybook/react-vite';
import { EventDetailPage } from './EventDetailPage';

const meta = { title: 'Pages/event-detail/EventDetailPage', component: EventDetailPage, args: { title: 'Community night', event: { title: 'Community night', date: 'October 8', time: '5:30pm', location: 'Community park' }, children: <p>Join your neighbors for an evening in the park.</p>, location: <p>100 Main Street</p> } } satisfies Meta<typeof EventDetailPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
