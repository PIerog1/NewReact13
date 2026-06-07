import { useState } from "react";

function ListManager() {
  const [tasks, setTasks] = useState(["Spanie", "Jedzenie"]);

  const addRandomTask = () => {
    const newTask = `Zadanie ${Math.floor(Math.random() * 100)}`;

    setTasks(prev => [...prev, newTask]);
  };

  const addThreeTasks = () => {
    setTasks(prev => [
      ...prev,
      `Zadanie ${Math.floor(Math.random() * 100)}`,
      `Zadanie ${Math.floor(Math.random() * 100)}`,
      `Zadanie ${Math.floor(Math.random() * 100)}`
    ]);
  };

  return (
    <div>
      <h2>Liczba zadań: {tasks.length}</h2>

      <button onClick={addRandomTask}>
        Dodaj losowe zadanie
      </button>

      <button onClick={addThreeTasks}>
        Dodaj 3 zadania
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListManager;