
# Student Task Manager

A simple and responsive task management application built with React and Vite. This project helps students organize their daily study activities, track task completion, and manage their workload efficiently.

## Features

- **Add Tasks:** Create new tasks with title validation.
- **View Tasks:** Display tasks with their titles and completion status.
- **Complete Tasks:** Mark tasks as completed or pending.
- **Delete Tasks:** Remove tasks with a confirmation prompt.
- **Task Statistics:** View total, completed, and remaining tasks.
- **Task Filtering:** Filter tasks by All, Completed, and Pending.
- **Form Validation:** Prevent empty or whitespace-only task submissions.
- **Empty State:** Display a friendly message when no tasks match the selected filter.
- **Reusable Components:** Use React components, props, and the `children` prop.
- **Responsive Design:** Support desktop and mobile screen sizes.

## Tech Stack

- React
- JavaScript (JSX)
- Vite
- Vanilla CSS
- HTML5

## Project Structure

```text
student-task-manager/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── StatsCard.jsx
│   │   └── TaskCard.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/MaksudaParvin/Student-Task-Manager-React-.git
```

**2. Navigate to the project directory**

```bash
cd student-task-manager
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## How to Use

1. Enter a task title in the input field.
2. Click **Add Task** to add it to your list.
3. Use the checkbox to mark a task as completed or pending.
4. Click **Delete** to remove a task after confirmation.
5. Use the **All**, **Completed**, and **Pending** filters to organize your task list.
6. Check the statistics cards to track your progress.

## React Concepts Practiced

This project demonstrates the following React fundamentals:

- Functional components
- JSX
- Props and component composition
- The `children` prop
- `useState` for state management
- Event handling with `onClick`, `onChange`, and `onSubmit`
- Conditional rendering
- Rendering lists with `map()` and unique keys
- Array operations with `filter()`
- Form validation
- Reusable UI components
- Basic error handling concepts

## Current Limitations

- Tasks are stored in React state and are not persisted after a page refresh.
- The application does not currently use a backend or database.
- Task descriptions are assigned automatically.

## Future Improvements

- Persist tasks using `localStorage`.
- Add task editing functionality.
- Add task priorities and due dates.
- Implement a React Error Boundary with a fallback UI.

## Learning Objectives

The main objective of this project is to practice React fundamentals by building a practical task management application with reusable components, interactive task operations, validation, and responsive styling.

## License

This project is intended for educational and learning purposes.
