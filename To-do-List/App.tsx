import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import TodoList from './src/components/TodoList';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.heading}>My To-do List</Text>
      <TodoList/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default App;