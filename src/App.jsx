
import { useState } from 'react';
import './App.css';

import StatsCard from './components/StatsCard';
import TaskCard from './components/TaskCard';

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
  const [activeFilter, setActiveFilter] = useState('all');

  // Calculate task statistics
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const remainingTasks = totalTasks - completedTasks;

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === 'completed') {
      return task.completed;
    }

    if (activeFilter === 'pending') {
      return !task.completed;
    }

    return true;
  });

  // Add a new task
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
    setActiveFilter('all');
  }

  // Toggle task completion status
  function handleToggleTask(taskId) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  }

  // Delete a task after confirmation
  function handleDeleteTask(taskId) {
    const taskToDelete = tasks.find(
      (task) => task.id === taskId
    );

    if (!taskToDelete) {
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete "${taskToDelete.title}"?`
    );

    if (!confirmed) {
      return;
    }

    setTasks((previousTasks) =>
      previousTasks.filter(
        (task) => task.id !== taskId
      )
    );
  }

  return (
    <div className="app">
      {/* Header */}
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
        {/* Welcome section */}
        <section className="welcome-section">
          <p className="eyebrow">
            YOUR PERSONAL PLANNER
          </p>

          <h1>Make today count.</h1>

          <p className="welcome-text">
            Organize your study tasks and keep moving forward.
          </p>
        </section>

        {/* Reusable statistics components */}
        <section className="stats-grid">
          <StatsCard
            title="Total Tasks"
            value={totalTasks}
            note="Tasks on your list"
          />

          <StatsCard
            title="Completed"
            value={completedTasks}
            note="Tasks finished"
            variant="completed-stat"
          />

          <StatsCard
            title="Remaining"
            value={remainingTasks}
            note="Tasks to complete"
            variant="pending-stat"
          />
        </section>

        {/* Main task panel */}
        <section className="task-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                STAY ON TRACK
              </p>

              <h2>My Tasks</h2>
            </div>

            <span className="task-count">
              {totalTasks}{' '}
              {totalTasks === 1 ? 'task' : 'tasks'}
            </span>
          </div>

          {/* Add task form */}
          <form
            className="task-form"
            onSubmit={handleAddTask}
            noValidate
          >
            <label htmlFor="task-title">
              Add a new task
            </label>

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
                aria-describedby={
                  error ? 'task-error' : undefined
                }
              />

              <button
                type="submit"
                className="add-button"
              >
                + Add Task
              </button>
            </div>

            {error && (
              <p
                id="task-error"
                className="form-error"
                role="alert"
              >
                {error}
              </p>
            )}
          </form>

          {/* Task filters */}
          <div
            className="task-filters"
            aria-label="Filter tasks"
          >
            <button
              type="button"
              className={`filter-button ${
                activeFilter === 'all' ? 'active' : ''
              }`}
              onClick={() => setActiveFilter('all')}
              aria-pressed={activeFilter === 'all'}
            >
              All ({totalTasks})
            </button>

            <button
              type="button"
              className={`filter-button ${
                activeFilter === 'pending' ? 'active' : ''
              }`}
              onClick={() => setActiveFilter('pending')}
              aria-pressed={activeFilter === 'pending'}
            >
              Pending ({remainingTasks})
            </button>

            <button
              type="button"
              className={`filter-button ${
                activeFilter === 'completed' ? 'active' : ''
              }`}
              onClick={() => setActiveFilter('completed')}
              aria-pressed={activeFilter === 'completed'}
            >
              Completed ({completedTasks})
            </button>
          </div>

          {/* Task list */}
          <div className="task-list">
            {filteredTasks.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">
                  ✓
                </div>

                <h3>
                  {totalTasks === 0
                    ? 'No tasks available'
                    : activeFilter === 'completed'
                      ? 'No completed tasks'
                      : 'No pending tasks'}
                </h3>

                <p>
                  {totalTasks === 0
                    ? 'Add your first task to get started.'
                    : 'Try another filter or add a new task.'}
                </p>
              </div>
            ) : (
              filteredTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={handleToggleTask}
                  onDelete={handleDeleteTask}
                />
              ))
            )}
          </div>

          <p className="panel-footer">
            Small steps today, meaningful progress tomorrow.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        Built for better study habits.
      </footer>
    </div>
  );
}

export default App;
