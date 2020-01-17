const calculator = require('./calculator')

it('runs the tests', () => {
    
})

describe('the calculator', () => {
    describe('the calculator', () => {
        it('should add two numbers', () => {
            const { add } = calculator;
            expect(add(2,2)).toBe(4)
            expect(add(2,1)).toBe(3)
            expect(add(-2,4)).toBe(2);
        })
        it('should return 0 on no args', () => {
            const { add } = calculator;
            expect(add()).toBe(0)
        })
    })
})