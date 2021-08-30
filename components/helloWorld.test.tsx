/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import HelloWorld from './helloWorld';

test('renders hello world', () => {
  render(<HelloWorld />);
  screen.getByRole('heading', { name: /hello world/i });
});
