import React from "react";
import { View, Switch, Text, Button, StyleSheet } from 'react-native';
import { Task } from '../model/task';

interface TodoItemProps {
    task: Task;
    deleteTask: (id: number) => void;
    toggleCompleted: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, deleteTask, toggleCompleted }) => {
    return (
        <View style={styles.container}>
            <Switch
                value={task.completed}
                onValueChange={() =>toggleCompleted(task.id)}
            />
            <Text style={task.completed ? styles.completed : styles.text}>
                {task.text}
            </Text>
            <Button title='X' onPress={() => deleteTask(task.id)} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    text: {
        textDecorationLine: 'none'
    },
    completed: {
        textDecorationLine: 'line-through'
    },
});

export default TodoItem;