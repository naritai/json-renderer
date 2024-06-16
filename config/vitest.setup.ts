import '@testing-library/jest-dom/vitest';
import { server } from '../mocks/server.ts';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  server.resetHandlers();
  localStorage.clear();
});

afterAll(() => server.close());
