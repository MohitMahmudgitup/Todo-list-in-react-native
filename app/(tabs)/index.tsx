import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { Text, View, StyleSheet, TouchableOpacity  } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  const todosData =  useQuery(api.todos.getTodos);
  const addTodo = useMutation(api.todos.addTodo)
  const clearAllTodos = useMutation(api.todos.clearAllTodos)
  console.log(todosData)
  return (
    <View style={styles.container }>
      <Text style={styles.content }>Edit app/index.tsx to edit this screen.1</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text style={styles.content }>Toggle Dark Mode</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>addTodo({text : "my name is inzamam"})}>
        <Text style={styles.content }>Add new todo</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={()=>clearAllTodos()}>
        <Text style={styles.content }>clear All Todos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
        flex: 1,
        // flexDirection : "",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      },
  content : {
    fontSize : 10,
    color : "white"
  }    
})