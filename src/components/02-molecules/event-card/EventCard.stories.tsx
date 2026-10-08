import type { Meta, StoryObj } from '@storybook/react-vite';
import { EventCard } from './EventCard';

const meta = { title: 'Molecules/event-card/EventCard', component: EventCard, args: { title: 'Community night', href: '#event', date: 'October 8, 2026', shortMonth: 'Oct', day: '8', time: '5:30pm', location: 'Community park', tags: 'Family' } } satisfies Meta<typeof EventCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
