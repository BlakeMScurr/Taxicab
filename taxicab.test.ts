import { generateSquares, factorPairs, factorPair, nestedSquare } from "./taxicab"

test('squareGeneration', ()=>{
    expect(generateSquares(1, 3)).toEqual([
        new nestedSquare(8, 7, 4, 1),
        new nestedSquare(7, 5, 5, 1)
    ])
})

test('factors', ()=> {
    expect(new factorPairs(4).pairs).toEqual(
        [
            new factorPair(1, 4),
            new factorPair(2, 2)
        ]
    )
})