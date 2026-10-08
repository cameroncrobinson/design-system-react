import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComboListing } from './ComboListing';
import { CardListing } from '../card-listing/CardListing';
import { EventListing } from '../event-listing/EventListing';
const meta = { title: 'Organisms/combo-listing/ComboListing', component: ComboListing, args: { left: <CardListing title="Related news" items={[{ title: 'Community update' }]} />, right: <EventListing title="Featured events" items={[{ title: 'Community night' }]} /> } } satisfies Meta<typeof ComboListing>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
