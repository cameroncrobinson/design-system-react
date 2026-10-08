import type { Meta, StoryObj } from '@storybook/react-vite';
import { LandingPage } from './LandingPage';
import { Button } from '../../01-atoms/buttons/Button';
const meta = { title: 'Pages/landing-pages/LandingPage', component: LandingPage, args: { hero: { title: 'Welcome to your community', subtitle: 'Explore services and resources' }, cta: <Button href="#services">Find services</Button>, services: { items: [{ title: 'Library', icon: '◇', href: '#library' }] } } } satisfies Meta<typeof LandingPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
