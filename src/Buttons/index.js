import "./style.css";

const Buttons = ({tasks, hideDone}) => {
    if (tasks.length === 0) {
        return null;
    }
    return (

        <div className="hiddenButtons">
            <button 
            className="hiddenButton1"
            disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie zadania
            </button>

            <button className="hiddenButton2"
            disabled={tasks.every(({ done }) => !done)}>
            {hideDone ? "Pokaż ukończone zadania" : "Ukryj ukończone zadania"}
            </button>;
            <button className="button_deleteAll">Usuń wszystkie ukończone zadania</button>
        </div>
       
    )
};


export default Buttons;
