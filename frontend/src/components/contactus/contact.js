import React from "react";
import '../contactus/contactus.css';


const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement form submission logic here
        console.log("Form submitted!");
    };

    return (
        <section className="contact" id="contact">
                <div className="container">
                    <h2 className="common-heading">contact us</h2>
                </div>

                <div className="row">
                    <div className="image">
                        <img src={require('../assets/contact 3.svg').default} alt="Contact Illustration" />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <span>your name</span>
                        <input
                            type="text"
                            required
                            placeholder="enter your full name"
                            maxLength="50"
                            name="name"
                            className="box"
                        />

                        <span>your email</span>
                        <input
                            type="email"
                            required
                            placeholder="enter your valid email"
                            maxLength="50"
                            name="email"
                            className="box"
                        />

                        <span>your contact</span>
                        <input
                            type="number"
                            required
                            placeholder="enter your contact number"
                            maxLength="10"
                            min="0"
                            name="number"
                            className="box"
                            onKeyPress={(e) => {
                                if (e.target.value.length === 10) e.preventDefault();
                            }}
                        />

                        <span>select course</span>
                        <select name="course" className="box">
                            <option value="" disabled selected>select the course --</option>
                            <option value="computer engineering">computer engineering</option>
                            <option value="computer science">computer science</option>
                            <option value="Information technology">Information technology</option>
                            <option value="artificial intelligence">artificial intelligence</option>
                            <option value="data science">data science</option>
                            <option value="agriculture">agriculture</option>
                            <option value="aviation">aviation</option>
                        </select>

                        <span>your message</span>
                        <textarea
                            name="message"
                            required
                            placeholder="enter your message or question"
                            maxLength="500"
                            className="box"
                            style={{ resize: 'none' }}
                        />

                        <input type="submit" value="send message" className="btn" name="send" />
                    </form>
                </div>
            </section>
    );
};

export default Contact;