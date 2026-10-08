import type { Meta, StoryObj } from '@storybook/react-vite';
import { HomePage } from './HomePage';

const meta = { title: 'Pages/landing-pages/HomePage', component: HomePage, args: { hero: { title: 'Welcome home' }, services: { items: [{ title: 'Library', icon: '◇', href: '#library' }] }, news: { title: 'Latest news', items: [{ title: 'Community update' }] }, events: { title: 'Featured events', items: [{ title: 'Community night' }] } } } satisfies Meta<typeof HomePage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
