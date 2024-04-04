import { block } from 'million/react'
import { BrowserRouter } from 'react-router-dom'
import styled, { StyledComponent } from 'styled-components'

// Toast
import { Toaster } from 'react-hot-toast'

// Global Styles
import { GlobalStyles } from 'assets/style/Global'

// Components
import { Contact, Hero, Navbar, About, Works, MatrixLoader, Footer } from 'components'

const AppBlock = block(
  function App(): JSX.Element {
    return (
      <StyledApp>
        // <MatrixLoader />
        <GlobalStyles />
        <Toaster />
        <BrowserRouter>
          <Navbar />
          <Hero />
          <About />
          <Works />
          <Contact />
          <Footer />
        </BrowserRouter>
      </StyledApp>
    )
  },
  { as: 'div' },
)

const StyledApp: StyledComponent<'div', any, {}, never> = styled.div`
  background: #141e30c0;
  background: -webkit-linear-gradient(to right, #243b55ab, #141e30ab);
  background: linear-gradient(to right, #243b55ab, #141e30ab);

  &::-webkit-scrollbar {
    display: none;
  }
`

export default AppBlock