import { render, screen } from '@testing-library/react';
import App from '../client/src/App';

test('renders the landing page', () => {
  render(<App />);
});