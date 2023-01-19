import '@testing-library/jest-dom'
import {render ,screen} from "@testing-library/react"

import Fetch from "./Fetch"

describe("Fetch",()=>{
    it('비동기 테스트',async ()=>{
        render(<Fetch></Fetch>)

        expect(screen.getByText(/Loading/)).toBeInTheDocument();

        expect(await screen.findAllByRole('listitem')).toHaveLength(2)

        // await waitFor(()=>{
        //     expect(screen.getAllByRole('listitem')).toHaveLength(2)
        // })
    })
})