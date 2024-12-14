import { lazy, useState } from "react"
import styled from "styled-components"
import { TestDiv } from "./TestAddQ"

const StyledContainer = styled.div`
    background-color: whitesmoke;
    height: 75%;
    width: 50%;
    position: absolute;
    left: 25%;
    top: 12.5%;
    border-radius: 14px;
    box-shadow: darkslateblue -20px 20px 16px;
`

function Container ({ children }) {
    // const [ questions, setQuestions ] = useState(3)

    return (
        <StyledContainer>
            { children }
        </StyledContainer>
    )
}

export default Container