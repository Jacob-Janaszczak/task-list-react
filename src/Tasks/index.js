import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li
            className={`list__item ${task.done && props.hideDoneTasks ? " hiddenButton--hidden" : ""}`}
            >
                 <button className="button__done">{task.done ? "✔" : ""}</button> 
            <span className={`list__content${task.done ? " list__item--done" : ""}`}>{task.content} </span>
            <button className="button__remove">🗑</button>
           
            </li>
        ))}

    </ul>
);

export default Tasks;