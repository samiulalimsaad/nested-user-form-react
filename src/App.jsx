import { useState } from "react";
import { initialState } from "./initialState";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="grid place-items-center h-screen p-20">
            <div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body space-y-4">
                        {Object.keys(initialState).map((type) => (
                            <div className="">
                                <fieldset>
                                    <legend className="font-semibold text-3xl capitalize">
                                        {type}
                                    </legend>
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
                                                        <div class="form-control w-full max-w-md">
                                                            <label class="label capitalize">
                                                                <span class="label-text text-xl">
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
                                                    <div class="form-control w-full max-w-md">
                                                        <label class="label capitalize">
                                                            <span class="label-text text-xl">
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
                    <button class="btn btn-primary">submit</button>
                </div>
            </div>
        </div>
    );
}

export default App;
