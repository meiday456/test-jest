const fn = require("./fn")


beforeAll(()=>console.log('outside before all'))//1
beforeEach(()=>console.log('outside before each'))//2 6
afterEach(()=>console.log('outside after each'))//4 10
afterAll(()=>console.log('outside after all'))// last


test("root test",()=>{
    console.log('root test')//3
})

//test block
//테스트 블럭 내부
describe("inside work" , ()=>{
    beforeAll(()=>console.log('inside before all'))//5
    beforeEach(()=>console.log('inside before each'))// 7
    afterEach(()=>console.log('inside after each'))// 9
    afterAll(()=>console.log('inside after all'))//last -1

    test("inside test 1",()=>{
        console.log('inside test 1')//8
    })

    test("inside test 2",()=>{
        console.log('inside test 2')
    })
    test("inside test 3",()=>{
        console.log('inside test 3')
    })
})


describe('outer', () => {
    console.log('describe outer-a'); //1

    describe('describe inner 1', () => {
        console.log('describe inner 1'); //2
        test('test 1', () => {
            console.log('test for describe inner 1'); //6
            expect(true).toEqual(true);
        });
    });

    console.log('describe outer-b'); //3

    test('test 1', () => {
        console.log('test for describe outer'); //7
        expect(true).toEqual(true);
    });

    describe('describe inner 2', () => {
        console.log('describe inner 2'); //4
        test('test for describe inner 2', () => {
            console.log('test for describe inner 2'); //8
            expect(false).toEqual(false);
        });
    });

    console.log('describe outer-c');//5
});

test.only("only test",()=>{
    console.log('only test')
})
test.skip("skip test",()=>{
    console.log('skip test')
})