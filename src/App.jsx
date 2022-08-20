import { useState } from "react";
import { initialState } from "./initialState";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="grid place-items-center h-screen">
            <div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body">
                        {Object.keys(initialState).map((type) => (
                            <div id={type}>
                                <fieldset className="">
                                    <legend>{type}</legend>
                                    <div className="flex gap-10 flex-wrap">
                                        {Object.keys(initialState[type]).map(
                                            (property) =>
                                                Object.keys(
                                                    initialState[type][property]
                                                ).length ? (
                                                    Object.keys(
                                                        initialState[type][
                                                            property
                                                        ]
                                                    ).map((v) => (
                                                        <div class="form-control w-full max-w-xs">
                                                            <label class="label">
                                                                <span class="label-text">
                                                                    {v}
                                                                </span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder="Type here"
                                                                name={v}
                                                                className="input input-bordered input-primary "
                                                            />
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div class="form-control w-full max-w-xs">
                                                        <label class="label">
                                                            <span class="label-text">
                                                                {property}
                                                            </span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            placeholder="Type here"
                                                            name={property}
                                                            className="input input-bordered input-primary "
                                                        />
                                                    </div>
                                                )
                                        )}
                                    </div>
                                </fieldset>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default App;
