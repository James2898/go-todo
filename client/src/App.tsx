import { Button, Container, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Stack>
        <Navbar />
        <Container>
        </Container>
      </Stack>
    </>
  )
}

export default App
