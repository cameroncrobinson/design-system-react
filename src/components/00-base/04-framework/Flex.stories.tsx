import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from './Flex';

const meta = { title: 'Base/04-framework/Flex', component: Flex, args: { children: <><p>First item</p><p>Second item</p></> } } satisfies Meta<typeof Flex>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
