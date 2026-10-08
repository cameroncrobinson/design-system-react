import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResourcePage } from './ResourcePage';

const meta = { title: 'Pages/resource/ResourcePage', component: ResourcePage, args: { title: 'Resource information', children: <p>Community information and resources.</p> } } satisfies Meta<typeof ResourcePage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
