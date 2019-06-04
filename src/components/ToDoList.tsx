import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ToDo from '../models/ToDo';
import ToDoEntry from './ToDoEntry';

const EmptyToDoList: React.FC<{}> = () => (
  <View style={styles.emptyListContainer}>
    <Text>No entries available</Text>
  </View>
);

const EntriesSeparator: React.FC<{}> = () => <View style={styles.separator} />;

export interface ToDoListProps {
  entries: ToDo[];
}

const ToDoList: React.FC<ToDoListProps> = ({ entries }) => {
  return (
    <FlatList
      data={entries}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ToDoEntry title={item.title} description={item.description} completed={item.completed} />
      )}
      ListEmptyComponent={EmptyToDoList}
      ItemSeparatorComponent={EntriesSeparator}
    />
  );
};

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

export default ToDoList;
