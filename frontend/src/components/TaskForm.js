import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        try {
            await onAddTask({ title }); // Call the passed addTask function
            setTitle(''); // Clear the input field after adding the task
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="border p-4 rounded text-center">
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a new task"
                />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Add Task</button>
        </form>
    );
};

export default TaskForm;
