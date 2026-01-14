import React from 'react';

import tasks from '../data/tasks.json';
import { Link } from 'react-router-dom';

export function Tasks() {
    console.log('Loaded tasks:', tasks);
    return (
        <div>
            <h1>Tasks List Page</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <Link to={`/form/${task.taskId}`}>{task.taskId}</Link>: {task.state}
                    </li>
                ))}
            </ul>
        </div>
    );
}