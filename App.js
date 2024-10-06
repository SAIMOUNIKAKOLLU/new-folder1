import React from 'react';
import { TaskProvider } from './context/TaskContext';
import { ThemeProvider } from './context/ThemeContext';
import TaskList from './components/TaskList';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="App">
          <ThemeSwitcher />
          <TaskList />
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
};

export default App;
