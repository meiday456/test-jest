
const someMockFunction = jest.fn()

const a = new someMockFunction()

a.name = 'test'
const b = new someMockFunction()

test('인스턴스 생성 2회',()=>{
    expect(someMockFunction.mock.instances.length).toBe(3);
})


// 값이 `test`로 설정 된 `name` 프로퍼티를 가진
// 이 함수의 첫 번째 인스턴스화에 의해 반환된 객체
test('첫번째 생성 인스턴스의 명칭이 test 인가?',()=> {
    expect(someMockFunction.mock.instances[0].name).toEqual('test1');
})


const mockFn = jest.fn();
//return value에 대해서 선언 할수있다.
//mockReturnValueOnce 만 사용해도 무방하지만 마지막 은 mockReturnValue를 사용한다.
mockFn
    .mockReturnValueOnce(10)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce("string")
    .mockReturnValue(false)


mockFn()
mockFn()

//순서대로 값이 출력된다.
test('mock fn return test', ()=>{
    console.log(mockFn.mock.results)
})

const arrayMockFn = jest.fn();

arrayMockFn
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(4)
    .mockReturnValue(5)

const filterArray = [2,2,4,5,5].filter(num=>arrayMockFn()===num)

test('filter test',()=>{
    expect(filterArray).toStrictEqual([2,5])
})


//Asynchronous
const asyncFn = jest.fn();

asyncFn.mockResolvedValue({name : "Kang"})

test('async test',()=>{
    asyncFn().then((res)=>{
        expect(res.name).toBe("Kang")
    })
})

//mocking module
//모듈을 clear 하며 mocking module을 한다.
const fn = require("./fn")


const axios = require("axios");
jest.mock("axios");

test("findOne fetches data from the API endpoint and returns what axios get returns", async () => {
    axios.get.mockResolvedValue({
        data: {
            id: 1,
            name: "Dale Seo",
        },
    });

    const user = await fn.findOne(1);
    expect(user).toHaveProperty("id", 1);
    expect(user).toHaveProperty("name", "Dale Seo");
    expect(axios.get).toBeCalledTimes(1);


    expect(axios.get).toBeCalledWith(
        `https://jsonplaceholder.typicode.com/users/1`
    );
});









// jest.mock('./fn')
// //clear 되기때문에 아래의 코드로 mock 함수를 지정해주지않으면
// //값이 undefined로 출력된다.
// fn.createUser.mockReturnValue({name : "Mike"})
//
// test('유저를 만들다',()=>{
//     const user = fn.createUser("Kang")
//     // console.log(user)
//     expect(user.name).toBe('Kang')
// })