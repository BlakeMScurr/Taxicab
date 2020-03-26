export function generateSquares(d: number, seed: number) {
    let squares: Array<nestedSquare> = [];
    let pairs = new factorPairs((seed*seed - d*d)/2)
    pairs.pairs.forEach(pair => {
        squares.push(seedNestedSquare(d, seed, pair))
    });
    return squares
}

function seedNestedSquare(d: number, seed: number, pair: factorPair) {
    let a = pair.x + pair.y + seed
    let b = pair.x + seed
    let c = pair.y + seed

    if (b < c) {
        var temp = b
        b = c
        c = temp
    }

    let ns = new nestedSquare(a, b, c, d)
    ns.verify()
    return ns
}

export class nestedSquare {
    // A number of squares in descending order
    a: number;
    b: number;
    c: number;
    d: number;

    constructor(a: number, b: number, c: number, d: number) {
        this.a = a
        this.b = b
        this.c = c
        this.d = d
    }

    verify() {
        let a = this.a
        let b = this.b
        let c = this.c
        let d = this.d
        if (a*a + d*d != b*b + c*c){
            throw "a^2 + d^2 = " + a + "^2 + " + d + "^2 = " + a*a + d*d + " !=  b^2 + c^2 = " + b + "^2 + " + c + "^2 = " + b*b + c*c
        }
    }
}

export class factorPair {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

export class factorPairs {
    pairs: Array<factorPair>

    // Factorises n into all possible pairs
    constructor(n: number) {
        this.pairs = [];

        for(var i = 1; i <= Math.sqrt(n); i++) {
            if (n/i == Math.floor(n/i)) {
                this.pairs.push(new factorPair(i, n/i))
            }
        }
    }
}