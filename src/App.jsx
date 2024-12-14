// Import libraries
import { createGlobalStyle } from "styled-components"

// Import internal components
import Page from "./components/Page"
import Container from "./components/Container"
import { TestDiv, AddQ } from "./components/TestAddQ"

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

* {
    box-sizing: border-box;
}
`

function App() {

  return (
    <>
      <GlobalStyles />
      <Page>
        <Container>
          <TestDiv />
          <TestDiv />
          <TestDiv />
          <AddQ />
        </Container>
      </Page>
    </>
  )
}

export default App