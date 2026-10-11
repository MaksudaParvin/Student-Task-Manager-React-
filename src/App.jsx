
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div className="brand">
          <div className="brand-icon">✓</div>
          <span>TaskFlow</span>
        </div>

        <span className="header-label">STUDENT WORKSPACE</span>
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
            <h2>3</h2>
            <span className="stat-note">Tasks on your list</span>
          </article>

          <article className="stat-card completed-stat">
            <span className="stat-label">Completed</span>
            <h2>1</h2>
            <span className="stat-note">One step forward</span>
          </article>

          <article className="stat-card pending-stat">
            <span className="stat-label">Remaining</span>
            <h2>2</h2>
            <span className="stat-note">Ready when you are</span>
          </article>
        </section>

        <section className="task-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">STAY ON TRACK</p>
              <h2>My Tasks</h2>
            </div>

            <span className="task-count">3 tasks</span>
          </div>

          <form className="task-form">
            <label htmlFor="task-title">Add a new task</label>

            <div className="input-row">
              <input
                id="task-title"
                type="text"
                placeholder="What do you need to do?"
              />

              <button type="button" className="add-button">
                + Add Task
              </button>
            </div>
          </form>

          <div className="task-list">
            <article className="task-item">
              <div className="task-info">
                <span className="task-checkbox">✓</span>
                <div>
                  <h3 className="task-done">Complete React notes</h3>
                  <p>Review the fundamental concepts</p>
                </div>
              </div>
              <span className="status completed">Completed</span>
            </article>

            <article className="task-item">
              <div className="task-info">
                <span className="task-checkbox empty-checkbox"></span>
                <div>
                  <h3>Practice JSX and components</h3>
                  <p>Build reusable UI elements</p>
                </div>
              </div>
              <span className="status pending">Pending</span>
            </article>

            <article className="task-item">
              <div className="task-info">
                <span className="task-checkbox empty-checkbox"></span>
                <div>
                  <h3>Finish project documentation</h3>
                  <p>Prepare notes for submission</p>
                </div>
              </div>
              <span className="status pending">Pending</span>
            </article>
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
