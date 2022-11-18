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

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({...task, done:true})));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [...tasks,{content: newTaskContent, done: false, id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id +1,}, ] )
  };

  const deleteAllTask = () => {
    if (hideDone === true){
      alert(`Masz ukryte zadania! Kliknij w "Pokaż ukończone zadania"`)
    }else
    
    setTasks(tasks => tasks.filter(({done}) => done === false))
  };

  return (
    <Container >
      <Section header={<h1 className="taskList__header">Lista zadań</h1>} />
      <Form addNewTask={addNewTask} />
      <Section header={<p className="list__head--title">Twoja lista zadań </p>} />
      <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
      <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} deleteAllTask={deleteAllTask}  />
      <Footer />
    </Container>

  );
}

export default App;
