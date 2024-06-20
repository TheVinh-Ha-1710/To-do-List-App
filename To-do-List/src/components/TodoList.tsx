import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet} from 'react-native'
import TodoItem from './TodoItem';
import { Task } from '../model/task';

const TodoList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskText, setTaskText] = useState<string>('');

    const addTask = () => {
        if(taskText.trim()) {
            setTasks([...tasks, { id: Date.now(), text: taskText, completed: false }])
            setTaskText('')
        }
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))
    };

    const toggleCompleted = (id: number) => {
        setTasks(
            tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task)
        )
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                value={taskText}
                onChangeText={setTaskText}
                placeholder='Add a task'
            />
            <Button title='Add task' onPress={addTask} />
            <FlatList
                data={tasks}
                renderItem={({item}) => (
                    <TodoItem
                        task={item}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                )}
                keyExtractor={item => item.id.toString()} 
            />   
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 8,
        marginBottom: 10,
    }
});

export default TodoList;