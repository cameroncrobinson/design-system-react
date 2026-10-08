import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup } from './RadioGroup';

const meta = { title: 'Atoms/forms/radio/RadioGroup', component: RadioGroup, args: { legend: 'Contact method', name: 'contact', options: [{ label: 'Email', value: 'email' }, { label: 'Phone', value: 'phone' }] } } satisfies Meta<typeof RadioGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
