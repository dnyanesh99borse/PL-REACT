import React, { useState } from 'react';
import '../faqs/faq.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        { question: ' What types of educational resources does Passlog offer?', answer: 'Passlog provides a wide range of educational resources, including study materials, video tutorials, practice exams, and interactive learning tools across various subjects. Our resources cater to different learning styles to help students grasp concepts effectively.' },
        { question: 'How do I get started with Passlog?', answer: 'Getting started with Passlog is easy! Simply create an account on our website, browse through our extensive library of resources, and start accessing materials that suit your learning needs. You can also subscribe to our newsletter for updates on new resources and study tips.' },
        { question: 'Can I contribute my own study materials to Passlog?', answer: 'We accept all major credit cards, PayPal, and Apple Pay.' },
        { question: ' Can I contribute my own study materials to Passlog?', answer: 'Yes! We encourage users to contribute their study materials, notes, and resources. By sharing your knowledge, you can help fellow students succeed in their learning journeys. Please visit our "Contribute" page for more information on how to submit your resources.' },
        { question: 'Is there a cost to access the resources on Passlog?', answer: "No, all the resources available on Passlog are completely free. Our mission is to make quality education accessible to everyone, regardless of their background or financial situation. However, if you're looking for a more comprehensive experience and quicker access to advanced features, you can opt for our premium membership, which offers additional resources and personalized support." }
    ];

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            <h3>{faq.question}</h3>
                            <span>
                                <i className={`fa-solid ${activeIndex === index ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
                            </span>
                        </div>
                        <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="faq-footer">
                <a href="/faqs" className="more-questions-link">Read more questions</a>
                <a href="/contact" className="contact-us-link">Ask a question</a>
            </div>
        </div>
    );
};

export default FAQ;
