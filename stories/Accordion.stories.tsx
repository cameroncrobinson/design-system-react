import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from '../src/index';

const meta = {
  title: 'Molecules/Accordion',
  component: Accordion,
  args: { items: [{ id: 'hours', title: 'Opening hours', content: <p>Monday to Friday, 9am to 5pm.</p> }, { id: 'contact', title: 'Contact us', content: <p>Visit your local community office.</p> }] }
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const InitiallyOpen: Story = { args: { defaultOpen: ['hours'] } };

