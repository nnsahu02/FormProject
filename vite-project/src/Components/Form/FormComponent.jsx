import React, { useState } from 'react';
import FormDataTable from './FormTable';
import './form.css'

function Form() {
    const [formData, setFormData] = useState([{
        firstName: '',
        lastName: '',
        address: '',
        pincode: '',
        mobileNumber: ''
    }]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // save form data to state or submit to server
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Pincode:
                    <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Mobile Number:
                    <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Save</button>
            </form>
            {/* Table to display saved data */}
            <FormDataTable formData={formData} />
        </div>
    );
}

export default Form;
