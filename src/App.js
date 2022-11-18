import React, { useState } from 'react';
import Form from "./Form";
import Tasks from './Tasks';
import Buttons from "./Buttons";
import Section from "./Section";
import Footer from "./Footer";
import Container from "./Container";

const tasks = [
  { id: 1, content: "przenieś na react", done: false },
  { id: 2, content: "obiad", done: true },
];


function App() {
  const [hideDone, setHideDone] = useState(false);
  
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  
  return (
    <Container >
      <Section header={<h1 className="taskList__header">Lista zadań</h1>} />
      <Form />
      <Section header={<p className="list__head--title">Twoja lista zadań </p>} />
      <Tasks tasks={tasks} hideDone={hideDone} />
      <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone}/>
      <Footer />
    </Container>

  );
}

export default App;
