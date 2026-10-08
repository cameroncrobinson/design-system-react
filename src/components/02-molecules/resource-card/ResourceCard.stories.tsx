import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResourceCard } from './ResourceCard';

const meta = { title: 'Molecules/resource-card/ResourceCard', component: ResourceCard, args: { title: 'Learning resources', children: <p>Explore free learning materials.</p>, audience: 'Families', resourceType: 'Online resource' } } satisfies Meta<typeof ResourceCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
