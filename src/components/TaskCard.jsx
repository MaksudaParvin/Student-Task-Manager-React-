
import Card from './Card';

function TaskCard({ task, onToggle, onDelete }) {
  return (
    <Card className="task-item">
      <div className="task-info">
        <button
          type="button"
          className={`task-checkbox ${
            task.completed ? '' : 'empty-checkbox'
          }`}
          onClick={() => onToggle(task.id)}
          aria-label={
            task.completed
              ? `Mark ${task.title} as pending`
              : `Mark ${task.title} as completed`
          }
          aria-pressed={task.completed}
        >
          {task.completed ? '✓' : ''}
        </button>

        <div>
          <h3 className={task.completed ? 'task-done' : ''}>
            {task.title}
          </h3>
          <p>{task.description}</p>
        </div>
      </div>

      <div className="task-actions">
        <span
          className={`status ${
            task.completed ? 'completed' : 'pending'
          }`}
        >
          {task.completed ? 'Completed' : 'Pending'}
        </span>

        <button
          type="button"
          className="delete-button"
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
          title="Delete task"
        >
          Delete
        </button>
      </div>
    </Card>
  );
}

export default TaskCard;
