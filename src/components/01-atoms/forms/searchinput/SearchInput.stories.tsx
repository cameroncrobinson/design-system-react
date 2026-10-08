import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchInput } from './SearchInput';

const meta = { title: 'Atoms/forms/searchinput/SearchInput', component: SearchInput, args: { label: 'Search the site' } } satisfies Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
