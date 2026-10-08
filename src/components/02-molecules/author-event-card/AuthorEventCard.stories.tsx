import type { Meta, StoryObj } from '@storybook/react-vite';
import { AuthorEventCard } from './AuthorEventCard';
import { Button } from '../../01-atoms/buttons/Button';
const meta = { title: 'Molecules/author-event-card/AuthorEventCard', component: AuthorEventCard, args: { title: 'Meet the author', date: 'October 8', time: '6pm', location: 'Library', horizontal: true, children: <p>Meet a local author.</p>, registration: <Button href="#register">Register</Button> } } satisfies Meta<typeof AuthorEventCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
