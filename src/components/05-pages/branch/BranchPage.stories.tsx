import type { Meta, StoryObj } from '@storybook/react-vite';
import { BranchPage } from './BranchPage';

const meta = { title: 'Pages/branch/BranchPage', component: BranchPage, args: { title: 'Branch information', children: <p>Community information and resources.</p> } } satisfies Meta<typeof BranchPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
