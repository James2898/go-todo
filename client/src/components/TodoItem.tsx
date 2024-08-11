import {Badge, Box, Flex, Text} from "@chakra-ui/react"
import { FaCheckCircle } from "react-icons/fa"
import { MdDelete } from "react-icons/md"

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
          <Badge ml={1} colorScheme="green">
            Done
          </Badge>
        )}
        {!todo.completed && (
          <Badge ml={1} colorScheme="yellow">
            In Progress
          </Badge>
        )}
      </Flex>
      <Flex gap={2} alignItems={"center"}>
        <Box cursor={"pointer"}>
          <FaCheckCircle size={20} />
        </Box>
        <Box cursor={"pointer"}>
          <MdDelete size={25} />
        </Box>
      </Flex>
    </Flex>
  )
}

export default TodoItem;