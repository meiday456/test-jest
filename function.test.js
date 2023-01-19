const mockFn = jest.fn()

mockFn.mockImplementation((num1, str1) => str1 + num1)

mockFn(3, "str")
it("mock Implementation test", () => {

    expect(mockFn).toBeCalledWith(3, "str")
})


//spyOn
//어떤 객체에 속한 함수의 구현을 가짜로 대체하지 않고,
//해당 함수의 호출 여부와 어떻게 호출되었는지만을 알아내야 할 때 사용한다.

const fnObject = {
    add : (num1 , num2) => {
        console.log('실제 함수 수행')
        return num1 + num2
    }
}
//add 함수에 스파이를 붙임
const spyOn = jest.spyOn(fnObject,"add")

//이부분에서 에러가 발생하는 것은 아래에서 이미 한번 호출을 했기때문
//describe를 먼저 처리하기때문인거 같다
it("spy 테스트", ()=>{
    fnObject.add(2,3)
    expect(spyOn).toBeCalledWith(2,3)
    // expect(spyOn).not.toBeCalled()
    expect(spyOn).toBeCalled()
    expect(spyOn).toBeCalledTimes(1)
})

//
// describe('spyon 과 일반 mocking 차이',()=>{
//     fnObject.add.mockReturnValue(3)
//     const result = fnObject.add(1,2)
//     expect(result).toBe(3)
//     console.log('이 함수가 먼저 수행이 되는가?')
// })

//그렇다 describe를 먼저 처리하기때문에 이렇게 선언한것으로 위에서
//위에서 에러가 발생하지않는다.
it('그렇다면 뒤에서 처리한 것은?',()=>{
    // fnObject.add.mockImplementation(()=>{})
    fnObject.add.mockReturnValue(3)
    const result = fnObject.add(5,8)
    expect(result).toBe(3)
    // console.log('이 함수가 먼저 수행이 되는가?')
})