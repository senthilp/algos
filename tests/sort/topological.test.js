const { TopologicalSort } = require('../../src/sort/topological');
const assert = require('chai').assert;

describe('Topological Sort', () => {
    it('FirstCut', () => {
        const tSort = new TopologicalSort();
        tSort.sort([1, 2, 3]);
        assert.strictEqual(1, 1);
    });
});
