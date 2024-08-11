import { Button, Container, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Stack>
        <Navbar />
        <Container>
          <TodoForm />
          <TodoList />
        </Container>
      </Stack>
    </>
  )
}

export default App
