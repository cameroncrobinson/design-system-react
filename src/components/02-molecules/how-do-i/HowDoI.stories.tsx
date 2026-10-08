import type { Meta, StoryObj } from '@storybook/react-vite';
import { HowDoI } from './HowDoI';

const meta = { title: 'Molecules/how-do-i/HowDoI', component: HowDoI, args: { items: [{ id: 'apply', title: 'Apply', links: [{ label: 'Library card', href: '#apply' }] }, { id: 'find', title: 'Find', links: [{ label: 'Locations', href: '#locations' }] }] } } satisfies Meta<typeof HowDoI>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
