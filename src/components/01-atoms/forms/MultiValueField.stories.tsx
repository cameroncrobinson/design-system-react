import type { Meta, StoryObj } from '@storybook/react-vite';
import { MultiValueField } from './MultiValueField';

const meta = { title: 'Atoms/forms/MultiValueField', component: MultiValueField, args: { label: 'Phone numbers', values: ['555-0100'], onChange: () => {} } } satisfies Meta<typeof MultiValueField>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
