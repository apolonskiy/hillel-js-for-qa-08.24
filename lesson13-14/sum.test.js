import {sum} from './sum';

describe('Sum function testing', () => {
    beforeAll(async () => {
        console.log('BEFORE ALL /// SOME SETUP')
    })
    beforeEach(async () => {
        console.log('BEFORE EACH /// SOME repetitive SETUP')
    })
    afterEach(async () => {
        console.log('ATER EACH /// SOME CLENAUP')
    })
    afterAll(async () => {
        console.log('After ALL /// SOME SETUP')
    })

    test('Test sum func', async() => {
        expect(sum(1,2)).toEqual(3)
    })

    //TOD: review later JIRA TASK
    test.failing('Test sum func negative', async() => {
        const sum = sum(1,2);
        expect(sum(1,2)).toEqual(3)
        expect(sum(1,2)).toEqual(4)
    })

    const testData = [[1,2,3], [5,4,9], [9,0,10]];
    // testData.forEach(([arg1, arg2, expected]) => {
    //     test(`Test sum func  to be ${expected}`, async() => {
    //         expect(sum(arg1,arg2)).toEqual(expected)
    //     })
    // })

    test.each(testData)('Test sum of %d + %d = %d', async(a, b, expected) => {
        expect(sum(a,b)).toEqual(expected)
    })

    // const testDataobj = [
    //     {payload: {name: 'qwe', data: {key:'value'}} , expectedStatus: 200},
    //     {payload: {name: '', data: {key:'value'}} , expectedStatus: 400},
    // ]

    // test('Verify success payload POST', async()=> {})
})
