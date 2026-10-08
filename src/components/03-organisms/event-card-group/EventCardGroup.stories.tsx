import type { Meta, StoryObj } from '@storybook/react-vite';
import { EventCardGroup } from './EventCardGroup';

const meta = { title: 'Organisms/event-card-group/EventCardGroup', component: EventCardGroup, args: { items: [{ title: 'Community night', date: 'October 8', shortMonth: 'Oct', day: '8' }, { title: 'Library event', date: 'October 9', shortMonth: 'Oct', day: '9' }] } } satisfies Meta<typeof EventCardGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
