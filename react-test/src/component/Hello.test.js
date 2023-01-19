import {render , screen} from "@testing-library/react"
import {unmountComponentAtNode} from "react-dom";
import Hello from "./Hello"

const user = {
    name : "Jike",
    age : 32
}

const userNoName = {
    age : 32
}

let container = null;
beforeAll(()=>{
    console.log('before all')
    container = document.createElement("div")
    document.body.appendChild(container)
})
afterAll(()=>{
    console.log('after all')
    unmountComponentAtNode(container)
    container.remove();
    container = null
})


test("Hello 라는 글자가 포함되는가?",()=>{
    console.log('1')
    render(<Hello user={user}/>)        //컴포넌트 렌더링
    const helloEl = screen.getByText(/Hello/i); //스크린에서 해당 텍스트가 있는지 확인한다.
    screen.logTestingPlaygroundURL()
    expect(helloEl).toBeInTheDocument()
})

//스냅샷은 성공하는 사례들을 찍어놓고 비교하면서 테스트하는 방식이다.
//렌더링된 화면과 찍어둔 스냅샷이 다르면 에러가 발생한다.
//처음 동작에서 스냅샷을 찍고 다음 테스트부터 스냅샷과 비교한다.
//만약 스냅샷과 달라 에러가 발생한는것이라면 u 를 눌러 스냅샷 업데이트를 진행하고
//테스트를 이어나가면 되지만 , 이경우 에러가 발생하는것이라면 에러마저 스냅샷으로 남겨지기때문에 신중하게 진행해야한다.
test("snapshot : name 있음",()=>{
    const el = render(<Hello user={user}/>)
    expect(el).toMatchSnapshot();
    console.log('2')
})


test("snapshot : name 없음",()=>{
    const el = render(<Hello />)
    expect(el).toMatchSnapshot();
    console.log('3')
})






