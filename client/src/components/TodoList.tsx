import {Flex, Spinner, Stack, Text} from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query";
import TodoItem from "./TodoItem"
import { BASE_URL } from "../App";


export type Todo = {
  _id: number;
  body: string;
  completed: string;
}
const TodoList = () => {
  const {data: todos, isLoading} = useQuery<Todo[]>({
    queryKey:["todos"],

    queryFn: async () => {
      try {
        const res = await fetch(BASE_URL + "/todos")
        const data = await res.json()

        if (!res.ok) {
          throw new Error(data.error || "Something went Wrong")
        }

        return data || []
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <>
      <Text
        fontSize={"4xl"}
        textTransform={"uppercase"}
        fontWeight={"bold"}
        textAlign={"center"}
        my={2}
        bgGradient="linear(to-r, #0b85f8, #00ffff)"
        bgClip="text"
        >
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
            All Tasks Complete!
          </Text>
          <img src="/go.png" alt="Go Logo" width={70} height={70}/>
        </Stack>
      )}
      <Stack>
        {todos?.map((todo) => (
          <TodoItem key={todo._id} todo={todo}/>
        ))}
      </Stack>
    </>
  )
}

export default TodoList