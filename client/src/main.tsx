import { createRoot } from 'react-dom/client';
import App from './App';
import createCache from '@emotion/cache';

export const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
