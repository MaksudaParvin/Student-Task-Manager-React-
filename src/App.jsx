
import { useState } from 'react';
import './App.css';

const initialTasks = [
  {
    id: 1,
    title: 'Complete React notes',
    description: 'Review the fundamental concepts',
    completed: true,
  },
  {
    id: 2,
    title: 'Practice JSX and components',
    description: 'Build reusable UI elements',
    completed: false,
  },
  {
    id: 3,
    title: 'Finish project documentation',
    description: 'Prepare notes for submission',
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskTitle, setTaskTitle] = useState('');
  const [error, setError] = useState('');

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const remainingTasks = totalTasks - completedTasks;

  function handleAddTask(event) {
    event.preventDefault();

    const trimmedTitle = taskTitle.trim();

    if (!trimmedTitle) {
      setError('Please enter a task title.');
      return;
    }

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      description: 'New task',
      completed: false,
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);

    setTaskTitle('');
    setError('');
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <div className="brand-icon">✓</div>
          <span>TaskFlow</span>
        </div>

        <span className="header-label">
          STUDENT WORKSPACE
        </span>
      </header>

      <main className="main-content">
        <section className="welcome-section">
          <p className="eyebrow">YOUR PERSONAL PLANNER</p>
          <h1>Make today count.</h1>
          <p className="welcome-text">
            Organize your study tasks and keep moving forward.
          </p>
        </section>

        <section className="stats-grid">
          <article className="stat-card">
            <span className="stat-label">Total Tasks</span>
            <h2>{totalTasks}</h2>
            <span className="stat-note">Tasks on your list</span>
          </article>

          <article className="stat-card completed-stat">
            <span className="stat-label">Completed</span>
            <h2>{completedTasks}</h2>
            <span className="stat-note">One step forward</span>
          </article>

          <article className="stat-card pending-stat">
            <span className="stat-label">Remaining</span>
            <h2>{remainingTasks}</h2>
            <span className="stat-note">Ready when you are</span>
          </article>
        </section>

        <section className="task-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">STAY ON TRACK</p>
              <h2>My Tasks</h2>
            </div>

            <span className="task-count">
              {totalTasks} {totalTasks === 1 ? 'task' : 'tasks'}
            </span>
          </div>

          <form className="task-form" onSubmit={handleAddTask}>
            <label htmlFor="task-title">Add a new task</label>

            <div className="input-row">
              <input
                id="task-title"
                type="text"
                placeholder="What do you need to do?"
                value={taskTitle}
                onChange={(event) => {
                  setTaskTitle(event.target.value);

                  if (error) {
                    setError('');
                  }
                }}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? 'task-error' : undefined}
              />

              <button type="submit" className="add-button">
                + Add Task
              </button>
            </div>

            {error && (
              <p id="task-error" className="form-error" role="alert">
                {error}
              </p>
            )}
          </form>

          <div className="task-list">
            {tasks.length === 0 ? (
              <p className="empty-state">No tasks available.</p>
            ) : (
              tasks.map((task) => (
                <article className="task-item" key={task.id}>
                  <div className="task-info">
                    <span
                      className={`task-checkbox ${
                        task.completed ? '' : 'empty-checkbox'
                      }`}
                      aria-hidden="true"
                    >
                      {task.completed ? '✓' : ''}
                    </span>

                    <div>
                      <h3 className={task.completed ? 'task-done' : ''}>
                        {task.title}
                      </h3>
                      <p>{task.description}</p>
                    </div>
                  </div>

                  <span
                    className={`status ${
                      task.completed ? 'completed' : 'pending'
                    }`}
                  >
                    {task.completed ? 'Completed' : 'Pending'}
                  </span>
                </article>
              ))
            )}
          </div>

          <p className="panel-footer">
            Small steps today, meaningful progress tomorrow.
          </p>
        </section>
      </main>

      <footer className="app-footer">
        Built for better study habits.
      </footer>
    </div>
  );
}

export default App;
