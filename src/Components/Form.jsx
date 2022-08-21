import { Field, Form, Formik } from "formik";
import { initialState } from "../initialState";
import { state } from "../state";
import Dropdown from "./Dropdown";

function Form() {
    const submitHandler = (values, action) => {
        state.push(values);
        action.resetForm();
        console.log({ values });
    };

    return (
        <div className="grid place-items-center h-screen p-20">
            <div>
                <Formik initialValues={initialState} onSubmit={submitHandler}>
                    {(props) => (
                        <Form>
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body space-y-4">
                                    {Object.keys(initialState).map((type) => (
                                        <div key={type} className="">
                                            <fieldset>
                                                <legend className="font-semibold text-3xl capitalize">
                                                    {type}
                                                </legend>
                                                <div className="flex gap-10 flex-wrap">
                                                    {Object.keys(
                                                        initialState[type]
                                                    ).map((property, i) =>
                                                        typeof initialState[
                                                            type
                                                        ][property] ===
                                                        "object" ? (
                                                            <div
                                                                key={property}
                                                                className="form-control w-full max-w-md"
                                                            >
                                                                <Dropdown
                                                                    key={
                                                                        property +
                                                                        i
                                                                    }
                                                                    type={type}
                                                                    property={
                                                                        property
                                                                    }
                                                                    placeholder="Type here"
                                                                    className="input input-bordered input-primary "
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div
                                                                key={property}
                                                                className="form-control w-full max-w-md"
                                                            >
                                                                <label className="label capitalize">
                                                                    <span className="label-text text-xl">
                                                                        {
                                                                            property
                                                                        }
                                                                    </span>
                                                                </label>
                                                                <Field
                                                                    type="text"
                                                                    placeholder="Type here"
                                                                    name={`${type}.${property}`}
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
                            <div className="card-actions justify-end">
                                <div>
                                    <button
                                        className="btn btn-error text-white mr-5"
                                        type="reset"
                                    >
                                        Reset
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default Form;
