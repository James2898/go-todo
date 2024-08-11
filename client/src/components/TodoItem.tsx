import {Badge, Flex, Text} from "@chakra-ui/react"

type TodoItem =  {
  id: string,
  body: string,
  completed: boolean
}

type props = {
  todo: TodoItem
}

const TodoItem = ({todo}: props) => {
  return (
    <Flex gap={2} alignItems={"center"}>
      <Flex
        flex={1}
        alignItems={"center"}
        border={"1px"}
        borderColor={"gray.600"}
        p={2}
        borderRadius={"lg"}
        justifyContent={"space-between"}
      >
        <Text
          color={todo.completed ? "green.200" : "yellow.200"}
          textDecoration={todo.completed ? "line-through": "none"}
        >
          {todo.body}
        </Text>
        {todo.completed && (
          <Badge>
            Done
          </Badge>
        )}
      </Flex>
    </Flex>
  )
}

export default TodoItem;