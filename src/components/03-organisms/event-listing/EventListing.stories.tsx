import type { Meta, StoryObj } from '@storybook/react-vite';
import { EventListing } from './EventListing';

const meta = { title: 'Organisms/event-listing/EventListing', component: EventListing, args: { title: 'Featured events', items: [{ title: 'Community night', date: 'October 8', shortMonth: 'Oct', day: '8' }], allLink: { href: '#events', label: 'All events' } } } satisfies Meta<typeof EventListing>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
