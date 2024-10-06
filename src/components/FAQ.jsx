import React from "react";
import "../styles/faq.sass";
import faqData from "../data/faq.json";
import FAQuestion from "../components/faqQuestion.jsx";

function FAQ(){
    return(
        <div className="faq">
            <h2>FAQs</h2>
            <div className="faqs">
                {faqData.map(data => (
                    <FAQuestion question = {faqData.question} answer = {faqData.answer}></FAQuestion>
                ))}
                <p>See More →</p>
            </div>
        </div>
    );
}

export default FAQ;