import type { Preview } from '@storybook/react-vite';
import '../dist/styles.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'todo' },
    options: { storySort: { order: ['Base', 'Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'] } }
  }
};
export default preview;
