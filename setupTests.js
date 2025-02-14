import '@testing-library/jest-dom';

const MESSAGES_TO_IGNORE = [
    "When testing, code that causes React state updates should be wrapped into act(...):",
    "Error:",
    "The above error occurred"
];
  
  
const originalError = console.error.bind(console.error);


console.error = (...args) => {
    const ignoreMessage = MESSAGES_TO_IGNORE.find(message => args.toString().includes(message));
    if (!ignoreMessage) originalError(...args);
}

if (typeof window !== "undefined") {
    const { ResizeObserver } = window;
  
    beforeEach(() => {
      // Mock ResizeObserver for testing
      //@ts-ignore
      delete window.ResizeObserver;
      window.ResizeObserver = jest.fn().mockImplementation(() => ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      }));
    });
  
    afterEach(() => {
      // Restore the original ResizeObserver after tests
      window.ResizeObserver = ResizeObserver;
      jest.restoreAllMocks();
    });
}

jest.setTimeout(50000);