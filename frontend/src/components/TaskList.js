import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
    return (
        <div className="border p-4 rounded mt-4">
            <h2 className="text-primary text-center">Active Tasks</h2>
            {tasks.filter((task) => !task.completed).map((task) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}

            <h2 className="text-primary text-center mt-4">Completed Tasks</h2>
            {tasks.filter((task) => task.completed).map((task) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TaskList;
