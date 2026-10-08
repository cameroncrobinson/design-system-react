import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';

const meta = { title: 'Atoms/links/link/Link', component: Link, args: { href: '#services', children: 'Explore services' } } satisfies Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
