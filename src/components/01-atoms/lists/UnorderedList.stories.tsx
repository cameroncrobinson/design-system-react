import type { Meta, StoryObj } from '@storybook/react-vite';
import { UnorderedList } from './UnorderedList';

const meta = { title: 'Atoms/lists/UnorderedList', component: UnorderedList, args: { items: ['Services', 'Events', 'Resources'] } } satisfies Meta<typeof UnorderedList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
