const generateUniqId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqId();

    expect(id).toHaveLength(8);
  })
});