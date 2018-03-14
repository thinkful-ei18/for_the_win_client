const diffBy = (pred) => (a, b) => a.filter(x => !b.some(y => pred(x, y)))

export const makeSymmDiffFunc = (pred) => (a, b) => diffBy(pred)(a, b).concat(diffBy(pred)(b, a));

/**
 * source: https://stackoverflow.com/questions/21987909/difference-between-two-array-of-objects-in-javascript
 */