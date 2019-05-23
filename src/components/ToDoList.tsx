import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ToDo from '../models/ToDo';
import ToDoEntry from './ToDoEntry';

const styles = StyleSheet.create({
  emptyListContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#999',
  },
});

const EmptyToDoList: React.FC<{}> = () => (
  <View style={styles.emptyListContainer}>
    <Text>No entries available</Text>
  </View>
);

const EntriesSeparator: React.FC<{}> = () => <View style={styles.separator} />;

const ToDoList: React.FC<{}> = () => {
  const todos: ToDo[] = [
    {
      completed: false,
      description: 'Description',
      title: 'Title',
      id: '1',
    },
    {
      completed: false,
      description: 'Description',
      title: 'Title',
      id: '2',
    },
  ];

  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ToDoEntry title={item.title} description={item.description} completed={item.completed} />
      )}
      ListEmptyComponent={EmptyToDoList}
      ItemSeparatorComponent={EntriesSeparator}
    />
  );
};

export default ToDoList;
