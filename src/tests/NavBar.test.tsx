import NavBar from "@stories/NavBar"
import { render } from "@testing-library/react"

describe("NavBar",()=>{
    it("should allow a nav structure to be passed in",()=>{
        const sampleStructure = {};
        const component = render(<NavBar structure={sampleStructure}/>)
        expect(true).toBeTruthy();
    })
})
