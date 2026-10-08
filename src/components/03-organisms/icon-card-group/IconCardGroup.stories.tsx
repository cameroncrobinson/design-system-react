import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCardGroup } from './IconCardGroup';

const meta = { title: 'Organisms/icon-card-group/IconCardGroup', component: IconCardGroup, args: { items: [{ title: 'Services', icon: '◇', href: '#services' }, { title: 'Events', icon: '◇', href: '#events' }] } } satisfies Meta<typeof IconCardGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
