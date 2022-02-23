import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView
} from "react-native";
import Todo from "./node_modules/Todo";
import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems,setTaskItems]=useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems,task]);
    setTask(null);
  };

  const completeTask=(index)=>{
    let itemCopy=[...taskItems];
    itemCopy.splice(index,1);
    setTaskItems(itemCopy);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Today's task</Text>
      <View style={styles.containe}>
        {
          taskItems.map((item,index)=>{
            return (
              <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
              <Todo  text={item}/>
              </TouchableOpacity>
            )
          })
        }
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.WriteTaskWrapper}
      >
        <TextInput
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}
          placeholder={"Write a task"}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addW}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  containe: {
    display: "flex",
  },
  heading: {
    fontSize: 35,
    marginTop: 50,
    marginLeft: 10,
    fontWeight: "bold",
  },
  WriteTaskWrapper: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addW: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});
