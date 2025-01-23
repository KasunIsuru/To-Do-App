import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import React, { useEffect, useState } from 'react';
import api from './api';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await api.get('/');
            setTasks(response.data);
        } catch (error) {
            console.error('Failed to fetch tasks', error);
        }
    };

    const addTask = async (newTask) => {
      try {
          const response = await api.post('/', newTask);
          setTasks((prevTasks) => [...prevTasks, response.data]); // Update the state immediately
      } catch (error) {
          console.error('Failed to add task', error);
      }
  };
  

    const updateTask = async (id, updates) => {
        try {
            const response = await api.put(`/${id}`, updates);
            setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
        } catch (error) {
            console.error('Failed to update task', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await api.delete(`/${id}`);
            setTasks(tasks.filter((task) => task._id !== id));
        } catch (error) {
            console.error('Failed to delete task', error);
        }
    };

    return (
        <div className="container mt-5 text-center">
            <h1 className="text-primary">To-Do Application</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8">
                    <TaskForm onAddTask={addTask} />
                    <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
                </div>
            </div>
        </div>
    );
};

export default App;
