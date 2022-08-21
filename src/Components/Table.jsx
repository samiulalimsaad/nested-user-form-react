import React from "react";
import { state } from "../state";

const Table = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>DateOf Birth</th>
                        <th>Gender</th>
                        <th>Mobile</th>
                        <th>Guardian Name</th>
                        <th>Guardian Email</th>
                        <th>Guardian Phone</th>
                        <th>Address</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Pin Code</th>
                        <th>Occupation</th>
                        <th>MaritalStatus</th>
                        <th>Nationality</th>
                    </tr>
                </thead>
                <tbody>
                    {state?.map((type, i) => (
                        <tr key={type} className="hover">
                            <th>{i + 1}</th>
                            <td>{type.personal.name}</td>
                            <th>{type.personal.dof}</th>
                            <th>{type.personal.sex}</th>
                            <th>{type.personal.mobile}</th>
                            <th>{type.contact.guardian.name}</th>
                            <th>{type.contact.email}</th>
                            <th>{type.contact.phone}</th>
                            <th>{type.address.address}</th>
                            <th>{type.address.state}</th>
                            <th>{type.address.city}</th>
                            <th>{type.address.pinCode}</th>
                            <th>{type.others.occupation}</th>
                            <th>{type.others.maritalStatus}</th>
                            <th>{type.others.nationality}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
