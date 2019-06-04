import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { createAppContainer, createStackNavigator, NavigationContainer } from 'react-navigation';
import AddEntryButton from './src/components/AddEntryButton';
import ToDoList from './src/components/ToDoList';
import ToDo from './src/models/ToDo';

const App: React.FC = () => {
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
    <View style={styles.container}>
      <ToDoList entries={todos} />
      <AddEntryButton />
    </View>
  );
};

const HomeScreen: React.FC = () => (
  <PaperProvider>
    <App />
  </PaperProvider>
);

const AppNavigator: NavigationContainer = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    height: '100%',
  },
});
