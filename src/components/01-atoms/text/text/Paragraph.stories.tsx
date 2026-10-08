import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paragraph } from './Paragraph';

const meta = { title: 'Atoms/text/text/Paragraph', component: Paragraph, args: { children: 'Community services and resources.' } } satisfies Meta<typeof Paragraph>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
