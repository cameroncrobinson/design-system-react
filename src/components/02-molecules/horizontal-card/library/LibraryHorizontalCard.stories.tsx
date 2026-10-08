import type { Meta, StoryObj } from '@storybook/react-vite';
import { LibraryHorizontalCard } from './LibraryHorizontalCard';

const meta = { title: 'Molecules/horizontal-card/library/LibraryHorizontalCard', component: LibraryHorizontalCard, args: { title: 'Library news', children: <p>Updates from the library.</p>, borderTop: true } } satisfies Meta<typeof LibraryHorizontalCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
