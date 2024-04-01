import { useRef, useState } from "react";
import "./App.css";

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [input, setInput] = useState<string>();
    const [tasks, setTasks] = useState<string[]>([]);
    const [fade, setFade] = useState<boolean>(false);

    const handleAdd = () => {
        setTasks([...tasks, input!]);
        inputRef.current!.value = "";
    };

    const handleRemove = (value: string) => {
        const updatedTasks = tasks.filter((task: string) => task != value);
        setFade(true);
        setTimeout(() => {
            setTasks(updatedTasks);
            setFade(false);
        }, 500)
    };

    return (
        <div className="app-container">
            <h1 className="logo-container rainbow-text">Vitodo</h1>
            <div className="input-container">
                <input
                    ref={inputRef}
                    onChange={(event) => setInput(event.currentTarget.value)}
                    placeholder="task name"
                />
                <button onClick={() => handleAdd()}>Add task</button>
            </div>
            <div className="tasks">
            {tasks.map((value: string, index: number) => {
                return (
                    <div key={index} className={`task-container ${fade === true ? "fade-out" : ""}`}>
                        <p>{value}</p>
                        <button onClick={() => handleRemove(value)}>
                            Remove
                        </button>
                    </div>
                );
            })}
            </div>
        </div>
    )
}

export default App;
