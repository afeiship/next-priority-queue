/*!
 * name: @jswork/next-priority-queue
 * description: Priority queue for next.
 * homepage: https://github.com/afeiship/next-priority-queue
 * version: 1.0.0
 * date: 2020-11-22 19:53:08
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NxQueue = nx.Queue || require('@jswork/next-queue');
  var Element = nx.declare({
    methods: {
      init: function (inElement, inPriority) {
        this.element = inElement;
        this.priority = inPriority;
      }
    }
  });

  var NxPriorityQueue = nx.declare('nx.PriorityQueue', {
    extends: NxQueue,
    statics: {
      Element: Element
    },
    methods: {
      enqueue: function (inElement, inPriority) {
        var element = new Element(inElement, inPriority);
        var added = false;
        nx.forEach(
          this.data,
          function (index, value) {
            if (element.priority < value.priority) {
              this.data.splice(index, 0, element);
              added = true;
              return nx.BREAKER;
            }
          },
          this
        );

        !added && this.data.push(element);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxPriorityQueue;
  }
})();
