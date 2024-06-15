import '@testing-library/jest-dom/vitest';
// import matchers from '@testing-library/jest-dom/matchers';
// import { expect } from 'vitest';
import { server } from '../mocks/server.ts';

// expect.extend(matchers);

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
