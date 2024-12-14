import styled from "styled-components"

const StyledPage = styled.div`
height: 100vh;
width: 100vw;
background-color: bisque;
background-image: linear-gradient(beige .15em, transparent .2em),
linear-gradient(90deg, beige .15em, transparent .2em);
background-size: 5em 5em;
`

function Page ({ children }) {
    return (
        <StyledPage>
            { children }
        </StyledPage>
    )
}

export default Page