import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormLabel } from './FormLabel';

const meta = { title: 'Atoms/forms/label/FormLabel', component: FormLabel, args: { children: 'Name', htmlFor: 'name', required: true } } satisfies Meta<typeof FormLabel>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
