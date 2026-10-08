import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProcessSteps } from './ProcessSteps';

const meta = { title: 'Molecules/process-step/ProcessSteps', component: ProcessSteps, args: { steps: [{ title: 'Apply', body: <p>Complete the form.</p> }, { title: 'Review', body: <p>We review your application.</p> }] } } satisfies Meta<typeof ProcessSteps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
