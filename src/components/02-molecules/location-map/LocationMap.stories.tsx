import type { Meta, StoryObj } from '@storybook/react-vite';
import { LocationMap } from './LocationMap';

const meta = { title: 'Molecules/location-map/LocationMap', component: LocationMap, args: { title: 'Community library', addresses: [{ name: 'Main library', street: '100 Main Street', city: 'New York', state: 'NY', zip: '10001', lat: 40.75, lng: -73.99, hours: 'Monday–Friday, 9am–5pm' }] } } satisfies Meta<typeof LocationMap>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
