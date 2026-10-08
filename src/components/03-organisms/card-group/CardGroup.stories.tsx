import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardGroup, Card } from '../../../index';

const meta = {
  title: 'Organisms/CardGroup',
  component: CardGroup,
  args: { columns: 3, children: <><Card title="Services"><p>Resources for residents.</p></Card><Card title="Events"><p>Activities in your community.</p></Card><Card title="News"><p>Updates from your local team.</p></Card></> }
} satisfies Meta<typeof CardGroup>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const TwoColumns: Story = { args: { columns: 2 } };

