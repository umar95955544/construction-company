import React, { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footerline from "../../Assets/Images/footer-line 2.svg";
import Facebook from "../../Assets/Images/facebook.svg";
import Twitter from "../../Assets/Images/twitter.svg";
import Linkdin from "../../Assets/Images/linkedin.svg";
import Subtract from "../../Assets/Images/Subtract.svg";
import Phone from "../../Assets/Images/phone.svg";
import Mail from "../../Assets/Images/mail.svg";
import { DarkModeContext } from '../../Assets/Context/DarkModeContext';
import Button from "../Reuseable/Button/Button";
import Styles from "./FooterBlog.module.scss";

function FooterBlog() {
    const {darkMode} = useContext(DarkModeContext);
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
    const buttonData = {
        padding:'0.5rem 2.5rem',
        backgroundColor:'#FFB400',
        text:'SEND MESSAGE',
        color:'#fff',
        border: '4px solid #FFFFFF',
        width:'100%'
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
        <div className={darkMode ?  `Content-dark`:`Content-light`}>
        <Container fluid className={Styles.footerMain}>
            <Row>
                <Col lg={6} className={`p-5 ${Styles.footerColOne}`}>
                    <div>
                        <h2>Join Our Newsletter</h2>
                        <img src={Footerline} alt="Contact Us Line"/>
                        <form onSubmit={handleSubmit} className="pt-2">
                        <div className="py-2">
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
                                <div className="py-2">
                                <input
                                    type="text"
                                    className={`form-control ${Styles.inName}`}
                                    id="surname"
                                    name="surname"
                                    placeholder="Surname"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                </div>
                                <div className="py-2">
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
                            <Button
                                    padding={buttonData.padding}
                                    backgroundColor={buttonData.backgroundColor}
                                    text={buttonData.text}
                                    border={buttonData.border}
                                    color={buttonData.color}
                                    width={buttonData.width}
                                />
                            </div>
                        </form>
                    </div>
                </Col>
                <Col lg={6} className="gx-0">
                        <div className={`p-4 ${Styles.imgFooter}`}>
                            <img src={Facebook} alt="Facebook"/>
                            <img src={Twitter} className="px-5" alt="Twitter"/>
                            <img src={Linkdin} alt="Linkdin"/>
                        </div>
                        <div className={Styles.txtFooter}>
                            <div className={Styles.Subtract}>
                                <img src={Subtract} alt="Subtract"/>
                                <p className="ps-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className={Styles.Subtract}>
                            <img src={Phone} alt="Phone"/>
                            <p className="ps-3">+00 123 456 78</p>
                            </div>
                            <div className={Styles.Subtract}>
                            <img src={Mail} alt="Mail"/>
                            <p className="ps-3">constractioninc@gmail.com</p>
                            </div>
                        </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default FooterBlog;
