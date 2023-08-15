import React, { useState } from 'react'
import Styles from './ContactForm.module.scss'
import Button from '../Button/Button';

function ContactForm() {
    const buttonData = {
        padding:'0.2rem 1.0rem',
        backgroundColor:'#F7F7F7',
        text:'SEND MESSAGE',
        color:'#000',
        border: '4px solid #2A2A2A',
};
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement the logic to handle the form submission, e.g., send the data to a server or perform any action.
        console.log(formData);
        // Clear form fields after submission (optional)
        setFormData({
            name: '',
            email: '',
        });
    };
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <input
                    type="text"
                    className={`form-control ${Styles.inName}`}
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='pt-2'>
                <input
                    type="email"
                    className={`form-control ${Styles.inEmail}`}
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="py-2">
                <textarea
                    className={`form-control ${Styles.inTextarea}`}
                    name="message"
                    placeholder="Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="d-flex justify-content-end pt-2">
                <Button 
padding = {buttonData.padding}
backgroundColor = {buttonData.backgroundColor}
text = {buttonData.text}
color = {buttonData.color}
border = {buttonData.border}
                />
            </div>
        </form>
    )
}

export default ContactForm