import {Flex, Spinner, Stack, Text} from "@chakra-ui/react"
import { useState } from "react"
import TodoItem from "./TodoItem"

const TodoList = () => {
  const [isLoading, setIsLoading] = useState(false)

  const todos:any = [
    {
      id: 123,
      completed: false,
      body: "Task 1"
    },
    {
      id: 123,
      completed: true,
      body: "Task 2"
    },
    {
      id: 123,
      completed: false,
      body: "Task 3"
    },
    {
      id: 123,
      completed: false,
      body: "Task 4"
    },
  ]

  return (
    <>
      <Text fontSize={"4xl"} textTransform={"uppercase"} fontWeight={"bold"} textAlign={"center"} >
          Today's Tasks
      </Text>
      {isLoading && (
        <Flex justifyContent={"center"} my={4}>
            <Spinner size={"xl"} />
        </Flex>
      )}
      {!isLoading && todos?.length === 0 && (
        <Stack alignItems={"center"}>
          <Text fontSize={"xl"} textAlign={"center"} color={"gray.500"}>
            All Tasks Complete
          </Text>
          <img src="/go.png" alt="Go Logo" width={70} height={70}/>
        </Stack>
      )}
      <Stack>
        {todos?.map((todo:any) => (
          <TodoItem key={todo._id} todo={todo}/>
        ))}
      </Stack>
    </>
  )
}

export default TodoList