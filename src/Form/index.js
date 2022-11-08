import React from 'react';
import "./style.css";


const Form = () => (
    <form className="form">

        <legend className="form__legend">Dodaj nowe zadanie</legend>

        <fieldset className="form__fieldset">

            <input className="form__field" maxlength="500" autofocus placeholder="Twoje nowe zadanie to... " value="" />

            <button className="form__button">Dodaj zadanie</button>

        </fieldset>

    </form>
);

export default Form;