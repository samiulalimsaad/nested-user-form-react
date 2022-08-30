import { Field } from "formik";
import React from "react";
import { initialState } from "../initialState";

const Dropdown = ({ type, property, ...props }) => {
    if (property === "govtIssueId")
        return (
            <div className="form-control w-full max-w-md">
                <label className="label capitalize">
                    <span className="label-text text-xl"></span>
                </label>
                <div className="flex">
                    <Field
                        name={`${type}.${property}.${
                            Object.keys(initialState[type][property])[0]
                        }`}
                        as="select"
                        {...props}
                    >
                        <option value="nid">NID</option>
                        <option value="pid">Passport Card</option>
                        <option value="did">Driving License</option>
                    </Field>
                    <Field
                        name={`${type}.${property}.${
                            Object.keys(initialState[type][property])[1]
                        }`}
                        {...props}
                    />
                </div>
            </div>
        );
    if (property === "guardian")
        return (
            <div className="form-control w-full max-w-md">
                <label className="label capitalize">
                    <span className="label-text text-xl"></span>
                </label>
                <div className="flex">
                    <Field
                        name={`${type}.${property}.${
                            Object.keys(initialState[type][property])[0]
                        }`}
                        as="select"
                        {...props}
                    >
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Other">Other</option>
                    </Field>
                    <Field
                        name={`${type}.${property}.${
                            Object.keys(initialState[type][property])[1]
                        }`}
                        {...props}
                    />
                </div>
            </div>
        );
};

export default Dropdown;
