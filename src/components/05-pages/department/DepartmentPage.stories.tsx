import type { Meta, StoryObj } from '@storybook/react-vite';
import { DepartmentPage } from './DepartmentPage';
import { Section } from '../../02-molecules/section/Section';
const meta = { title: 'Pages/department/DepartmentPage', component: DepartmentPage, args: { pageHeader: { title: 'Community department', subtitle: 'Working together' }, services: { items: [{ title: 'Library', href: '#library', icon: '◇' }] }, children: <Section title="About us"><p>Supporting our community.</p></Section> } } satisfies Meta<typeof DepartmentPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
