import {fireEvent, render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event";

import Counter from "./Counter"

//query type
//get(쿼리타입) , : 동기적으로 처리되며 타겟을 찾지 못할 시 에러를 던진다
// find , : 비동기적으로 처리되며 타겟을 찾지 못할 시 에러를 던진다
// query : 동기적으로 처리되며 타깃을 찾지 못할 시 null을 반환한다.


describe("Counter test",()=>{
    it.skip("should render Counter", ()=>{
        render(<Counter></Counter>)
    })
})

//렌더링 된 결과에서 테스트를 진행
describe("Counter test",()=>{
    it.skip("should render Counter", ()=>{
        render(<Counter></Counter>)
        screen.getByRole('button', {name: "+"})
        screen.getByText('+')
    })
})

//사용자 action
//RTL로 얻어온 타겟(요소)를 가지고 이벤트를 발생시킬 수 있다.
//두가지로 이벤트를 발생시켰는데
//fireEvent보다 userEvent를 권장한다, 이 api는 내부적으로 fireEvent를 사용하며, 실제 유저와 유사한 기능을
//추가로 제공하기 때문
describe("test 3",()=>{
    it('click event test', ()=>{
        render(<Counter></Counter>)
        const target = screen.getByRole('button', {name: "+"})
        fireEvent.click(target)
        userEvent.click(target)
        expect(screen.getByText('2')).toBeTruthy()
        expect(target.textContent).toBe('+')
    })
})





