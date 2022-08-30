import { useState } from "react";
import Table from "./Components/Table";
import UserForm from "./Components/UserForm";
import { dummyState } from "./state";

function App() {
    const [index, setIndex] = useState(0);

    const [state, setState] = useState(dummyState);

    return (
        <div className="grid place-items-center h-screen p-20">
            <div className="space-x-4">
                <button
                    onClick={() => setIndex(1)}
                    className="text-white btn btn-accent"
                >
                    Form
                </button>
                <button
                    onClick={() => setIndex(0)}
                    className="text-white btn btn-warning"
                >
                    Table
                </button>
            </div>
            {index ? <UserForm setState={setState} /> : <Table state={state} />}
        </div>
    );
}

export default App;
