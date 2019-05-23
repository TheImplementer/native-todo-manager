import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ToDoEntryProps {
  title: string;
  description: string;
  completed: boolean;
}

const ToDoEntry: React.FC<ToDoEntryProps> = ({ title, description, completed }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default ToDoEntry;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  title: {
    fontWeight: '700',
  },
});
