import React from 'react';
import { Text, View } from 'react-native';
import ToDo from '../models/ToDo';

const ToDoList: React.FC = () => {
  const todos: ToDo[] = [];

  return (
    <View>
      {todos.map(todo => (
        <Text key={todo.id}>todo.title</Text>
      ))}
    </View>
  );
};

export default ToDoList;
