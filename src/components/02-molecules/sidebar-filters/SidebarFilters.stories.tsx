import type { Meta, StoryObj } from '@storybook/react-vite';
import { SidebarFilters } from './SidebarFilters';
import { CheckboxGroup } from '../../01-atoms/forms/checkbox/CheckboxGroup';
const meta = { title: 'Molecules/sidebar-filters/SidebarFilters', component: SidebarFilters, args: { children: <CheckboxGroup legend="Topics" name="topics" options={[{ label: 'News', value: 'news' }, { label: 'Events', value: 'events' }]} /> } } satisfies Meta<typeof SidebarFilters>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
