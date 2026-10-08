import type { Meta, StoryObj } from '@storybook/react-vite';
import { Fieldset } from './Fieldset';
import { TextField } from './textfields/TextField';
const meta = { title: 'Atoms/forms/Fieldset', component: Fieldset, args: { legend: 'Contact details', children: <TextField label="Name" /> } } satisfies Meta<typeof Fieldset>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
