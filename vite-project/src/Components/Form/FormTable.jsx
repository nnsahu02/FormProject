import React from 'react';

function FormDataTable(props) {
    const { formData } = props;

    const Arr = [formData]

    console.log(Arr)

    return (
        <div>
            <div>
                {Arr.map((data, index) => (
                    <div key={index}>
                        <td>First Name : {data.firstName}</td>
                        <br />
                        <td>Last Name : {data.lastName}</td>
                        <br />
                        <td>Address : {data.address}</td>
                        <br />
                        <td>Pincode {data.pincode}</td>
                        <br />
                        <td>Mobile Number : {data.mobileNumber}</td>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FormDataTable;
