import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(task.title);

    const handleEditClick = () => setIsEditing(true);
    const handleSaveClick = () => {
        if (editedTitle.trim() !== '') {
            onUpdate(task._id, { title: editedTitle });
            setIsEditing(false);
        }
    };
    const handleCancelClick = () => {
        setEditedTitle(task.title);
        setIsEditing(false);
    };

    return (
        <div className="d-flex align-items-center border p-3 rounded mb-2">
            <input
                type="checkbox"
                className="form-check-input me-2"
                checked={task.completed}
                onChange={() => onUpdate(task._id, { completed: !task.completed })}
            />
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        className="form-control me-2"
                    />
                    <button onClick={handleSaveClick} className="btn btn-success me-2">Save</button>
                    <button onClick={handleCancelClick} className="btn btn-secondary">Cancel</button>
                </>
            ) : (
                <>
                    <span
                        className={`ms-2 ${task.completed ? 'text-decoration-line-through' : ''}`}
                    >
                        {task.title}
                    </span>
                    <button onClick={handleEditClick} className="btn btn-warning btn-sm ms-3">Edit</button>
                    <button onClick={() => onDelete(task._id)} className="btn btn-danger btn-sm ms-2">Delete</button>
                </>
            )}
        </div>
    );
};

export default TaskItem;
