import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [listOfTasks, setListOfTasks] = useState([]);

  function AddTask(){
    Keyboard.dismiss();
    setListOfTasks([...listOfTasks, task])
    setTask(null);
  }

  //The below function is saved as a constant and then called, because calling the function with the parameter
  //when this is a normal function, not an arrow one, causes the app to crash

  const completeTask = (index) => {
    let tasksCopy = [...listOfTasks];
    tasksCopy.splice(index, 1);
    setListOfTasks(tasksCopy)
  }

  return (
    <View style={toDoStyle.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={toDoStyle.tasksWrapper}>
        <Text style={toDoStyle.title}>today's tasks</Text>
        <Text style={toDoStyle.subTitle}>Select a task to delete it</Text>
        <View style={toDoStyle.tasks}>
          {/* This is where the tasks will go! */}
          {
            listOfTasks.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={toDoStyle.inputArea}
      >
        <TextInput style={toDoStyle.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={AddTask}>
          <View style={toDoStyle.addButtonStyle}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const toDoStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: "capitalize"
  },
  subTitle: {
    marginTop:10,
    fontSize: 15,
  },
  tasks: {
    marginTop: 30,
  },
  inputArea: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addButtonStyle: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});
