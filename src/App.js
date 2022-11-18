import React, { useState } from 'react';
import Form from "./Form";
import Tasks from './Tasks';
import Buttons from "./Buttons";
import Section from "./Section";
import Footer from "./Footer";
import Container from "./Container";




function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przenieś na react", done: false },
    { id: 2, content: "obiad", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;

    }))
  };

  return (
    <Container >
      <Section header={<h1 className="taskList__header">Lista zadań</h1>} />
      <Form />
      <Section header={<p className="list__head--title">Twoja lista zadań </p>} />
      <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
      <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone}  />
      <Footer />
    </Container>

  );
}

export default App;
