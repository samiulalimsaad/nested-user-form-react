import { useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";

function App() {
    const [index, setIndex] = useState(0);

    return (
        <div className="grid place-items-center h-screen p-20">
            <div className="space-x-4">
                <button className="text-white btn btn-accent">Form</button>
                <button className="text-white btn btn-warning">Table</button>
            </div>
            {index ? <Form /> : <Table />}
        </div>
    );
}

export default App;
