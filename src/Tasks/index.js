import "./style.css";

const Tasks = ({tasks, hideDone, removeTask}) => (
    <ul className="list">
        {tasks.map(task => (
            <li
            className={`list__item ${task.done && hideDone ? " hiddenButton--hidden" : ""}`}
            >
                 <button className="button__done">{task.done ? "✔" : ""}</button> 
            <span className={`list__content${task.done ? " list__item--done" : ""}`}>{task.content} </span>
            <button className="button__remove" onClick={() => removeTask(task.id)}>🗑</button>
           
            </li>
        ))}

    </ul>
);

export default Tasks;