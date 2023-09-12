"use client";
import React, {useReducer, useState} from "react";

const myTodos = [
    {
        id:1,
        title:"Faire les courses"
    },
    {
        id:2,
        title:"Faire la vaisselle"
    },
    {
        id:3,
        title:"Faire le ménage"
    },
];
console.log(myTodos);


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case 'REMOVE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };
        default: 
            return state;    
    }
};

export default function instruction() {
    const [state, dispatch] = useReducer(reducer, { tasks: myTodos });
    const [currentTask, setCurrentTask] = useState('');


    const addTask = () => {
        if (currentTask.trim() !== '') {
            const newTask = {
                id: Date.now(),
                title: currentTask
            };
            dispatch({ type: 'ADD_TASK', payload: newTask });
            setCurrentTask('');
        }
    };

    const removeTask = taskId => {
        dispatch({ type: 'REMOVE_TASK', payload: taskId })
    };

    return(
        <>
            <h2>Liste des taches</h2>
            <ul>
                {state.tasks.map(task => {
                    <li key={task.id}>
                        {task.title}{''}
                        <button onClick={() => removeTask(task.id)}>Supprimer</button>
                    </li>
                })}
            </ul>
            <form>
                <input type="text" value={currentTask} onChange={(e) => setCurrentTask(e.target.value)}></input>
                <button type="button" onClick={addTask}>Add</button>
            </form>
        </>
    );
}