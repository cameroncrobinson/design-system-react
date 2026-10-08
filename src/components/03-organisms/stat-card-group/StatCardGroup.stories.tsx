import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatCardGroup } from './StatCardGroup';

const meta = { title: 'Organisms/stat-card-group/StatCardGroup', component: StatCardGroup, args: { title: 'Our community', items: [{ stat: '24', description: 'Locations' }, { stat: '50', description: 'Programs' }] } } satisfies Meta<typeof StatCardGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
