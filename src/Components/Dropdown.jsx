import { Field } from "formik";
import React from "react";
import { initialState } from "../initialState";

const Dropdown = ({ type, property, ...props }) => {
    if (property === "govtIssueId")
        return (
            <div>
                <div className="form-control w-full max-w-md">
                    <label className="label capitalize">
                        <span className="label-text text-xl"></span>
                    </label>
                    <Dropdown
                        type={type}
                        placeholder="Type here"
                        name={`${type}.${property}.${Object.keys(
                            initialState[type][property]["type"]
                        )}`}
                        className="input input-bordered input-primary "
                    />
                </div>
                <Field as="select" {...props}>
                    <option value="nid">NID</option>
                    <option value="pid">Passport Card</option>
                    <option value="did">Driving License</option>
                </Field>
                <Field
                    name={`${type}.${property}.${Object.keys(
                        initialState[type][property]["id"]
                    )}`}
                    {...props}
                />
            </div>
        );
    if (property === "guardian")
        return (
            <div>
                <div className="form-control w-full max-w-md">
                    <label className="label capitalize">
                        <span className="label-text text-xl"></span>
                    </label>
                    <Dropdown
                        type={type}
                        placeholder="Type here"
                        name={`${type}.${property}.${Object.keys(
                            initialState[type][property]["type"]
                        )}`}
                        className="input input-bordered input-primary "
                    />
                </div>
                <Field as="select" {...props}>
                    <option value="f">Father</option>
                    <option value="m">Mother</option>
                    <option value="o">Other</option>
                </Field>
                <Field
                    name={`${type}.${property}.${Object.keys(
                        initialState[type][property]["name"]
                    )}`}
                    {...props}
                />
            </div>
        );
};

export default Dropdown;
