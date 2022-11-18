import React, { useState } from 'react';
import "./style.css";


const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) =>{
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");

    };


    return (
        <form className="form" onSubmit={onFormSubmit}>

            <legend className="form__legend">Dodaj nowe zadanie</legend>

            <fieldset className="form__fieldset">

                <input
                    value={newTaskContent}
                    onChange={({target})=> setNewTaskContent(target.value) }
                    className="form__field" maxlength="500" autofocus placeholder="Twoje nowe zadanie to... " />

                <button className="form__button">Dodaj zadanie</button>

            </fieldset>

        </form>
    );
};

export default Form;