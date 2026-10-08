import type { Meta, StoryObj } from '@storybook/react-vite';
import { Colors } from './Colors';

const meta = { title: 'Base/01-colors/Colors', component: Colors, args: {} } satisfies Meta<typeof Colors>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
