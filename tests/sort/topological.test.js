const { TopologicalSort } = require('../../src/sort/topological');
const assert = require('chai').assert;

describe('Topological Sort', () => {
    describe('FirstCut', () => {
        const sort = new TopologicalSort();
        sort.run();
        assert.strictEqual(1, 1);
    });
});
