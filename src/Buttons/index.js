import "./style.css";

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => {
    if (tasks.length === 0) {
        return null;
    }
    return (

        <div className="hiddenButtons">
            <button 
            onClick={() => setAllDone()}
            className="hiddenButton1"
            disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie zadania
            </button>

            <button 
            onClick={toggleHideDone}
            className="hiddenButton2"
            disabled={tasks.every(({ done }) => !done)}>
            {hideDone ? "Pokaż ukończone zadania" : "Ukryj ukończone zadania"}
            </button>;
           
            <button className="button_deleteAll">Usuń wszystkie ukończone zadania</button>
        </div>
       
    )
};


export default Buttons;
