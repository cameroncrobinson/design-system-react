import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid } from './Grid';

const meta = { title: 'Base/04-framework/Grid', component: Grid, args: { children: <><p>Column one</p><p>Column two</p><p>Column three</p></> } } satisfies Meta<typeof Grid>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
