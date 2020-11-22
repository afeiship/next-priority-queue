(function() {
  const NxPriorityQueue = require('../src');

  describe('NxPriorityQueue.methods', function() {
    test('init', function() {
      const data = { key: 1, value: 2 };
      expect(!!data).toBe(true);
    });
  });
})();
