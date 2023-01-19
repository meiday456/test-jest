import React from "react"
import {render , screen} from "@testing-library/react"
import {act} from "react-dom/test-utils"

import Hello from "./Hello"



it("renders with or without a name",()=>{
    act(()=>{
        render(<Hello />)
    })
    const helloEl = screen.getByText(/Login/i)
    expect(helloEl.textContent).toBe("Login!")

    // act(()=>{
    //     render(<Hello user={{name : 'kang'}}/>,container)
    // })
    // expect(container.textContent).toBe("Login!")
})

//expect 를 사용하지않고도 match가 가능한것인가?
it("match no name ",()=>{
    const helloEl = render(<Hello/>)
    helloEl.getByText('Login!!')
})