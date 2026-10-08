import type { Meta, StoryObj } from '@storybook/react-vite';
import { SvgIcon } from './SvgIcon';

const meta = { title: 'Atoms/images/icons/SvgIcon', component: SvgIcon, args: { href: '#example', label: 'Example icon' } } satisfies Meta<typeof SvgIcon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
