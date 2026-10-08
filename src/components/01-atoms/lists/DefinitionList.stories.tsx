import type { Meta, StoryObj } from '@storybook/react-vite';
import { DefinitionList } from './DefinitionList';

const meta = { title: 'Atoms/lists/DefinitionList', component: DefinitionList, args: { items: [{ term: 'Library', description: 'Community books and resources' }] } } satisfies Meta<typeof DefinitionList>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
