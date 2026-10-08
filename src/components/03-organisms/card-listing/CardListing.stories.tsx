import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardListing } from './CardListing';

const meta = { title: 'Organisms/card-listing/CardListing', component: CardListing, args: { title: 'Related news', items: [{ title: 'Community update', children: <p>Latest news.</p> }], allLink: { href: '#news', label: 'All news' } } } satisfies Meta<typeof CardListing>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
