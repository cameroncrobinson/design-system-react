import type { Meta, StoryObj } from '@storybook/react-vite';
import { FullWidth } from './FullWidth';
import { Section } from '../02-molecules/section/Section';
const meta = { title: 'Templates/FullWidth', component: FullWidth, args: { children: <Section title="Full width content"><p>Explore community resources.</p></Section> } } satisfies Meta<typeof FullWidth>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
