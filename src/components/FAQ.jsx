import React from "react";
import "../styles/faq.sass";
import faqData from "../data/faq.json";

function FAQ(){
    return(
        <div className="faq">
            <h2>FAQs</h2>
            <div className="faqs">
                {faqData.map(data => (
                    <faqQuestion question = {faqData.question} answer = {faqData.answer}></faqQuestion>
                ))}
                <p>See More →</p>
            </div>
        </div>
    );
}

export default FAQ;