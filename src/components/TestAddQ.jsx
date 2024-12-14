import styled from "styled-components"

const StyledTestDiv = styled.div`
    background-color: teal;
    width: 80%;
    height: 15%;
    margin: 20px auto;
    border-radius: 14px;
`

function TestDiv () {

    return (
        <StyledTestDiv>
            <input type="text" />
        </StyledTestDiv>
    )
}

const StyledAddQ = styled.div`
    background-color: orange;
    width: 26%;
    height: 15%;
    margin: 20px auto;
    border-radius: 14px;
`

function AddQ () {

    function trying () {

    }

    return (
        <StyledAddQ onClick={trying}/>
    )
}

export { TestDiv, AddQ }