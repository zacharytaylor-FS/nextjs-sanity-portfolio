const mockClient = {
  client: {
    fetch: jest.fn(() => Promise.resolve([])),
  }
}

export default () => mockClient