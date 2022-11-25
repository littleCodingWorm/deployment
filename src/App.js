import './App.css';
import TaskList from './components/TaskList';
import Form from './components/CreateNewTask';
function App() {
  return (
    <div>
      <Form />
      <TaskList />;
    </div>
  );
}

export default App;
