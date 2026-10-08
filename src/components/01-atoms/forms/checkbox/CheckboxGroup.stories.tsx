import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxGroup } from './CheckboxGroup';

const meta = { title: 'Atoms/forms/checkbox/CheckboxGroup', component: CheckboxGroup, args: { legend: 'Topics', name: 'topics', options: [{ label: 'News', value: 'news' }, { label: 'Events', value: 'events' }] } } satisfies Meta<typeof CheckboxGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
