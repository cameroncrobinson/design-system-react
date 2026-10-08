import type { Meta, StoryObj } from '@storybook/react-vite';
import { ServicePage } from './ServicePage';

const meta = { title: 'Pages/service/ServicePage', component: ServicePage, args: { title: 'Service information', children: <p>Community information and resources.</p> } } satisfies Meta<typeof ServicePage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
