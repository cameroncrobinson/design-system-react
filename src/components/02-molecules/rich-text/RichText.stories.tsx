import type { Meta, StoryObj } from '@storybook/react-vite';
import { RichText } from './RichText';

const meta = { title: 'Molecules/rich-text/RichText', component: RichText, args: { title: 'About our services', children: <><p>Explore <strong>community resources</strong>.</p><ul><li>Library</li><li>Parks</li></ul></> } } satisfies Meta<typeof RichText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
