(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxPriorityQueue = require('../src/next-priority-queue');

  describe('NxPriorityQueue.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
