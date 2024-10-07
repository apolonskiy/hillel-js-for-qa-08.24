import { sum } from "../src/sumFunc"

test('Jest shocase unit test for local function', async() =>{
    const sumResult = sum(5, 7);
    expect(sumResult).toEqual(12)
})
