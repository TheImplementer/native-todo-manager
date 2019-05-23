import React from 'react';
import { StyleSheet, View } from 'react-native';
import ToDoList from './src/components/ToDoList';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <ToDoList />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
