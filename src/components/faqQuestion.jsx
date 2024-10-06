import React from "react";

function Question({question, answer}){
    return(
        <div className="faq-question">
            <h3>{props.question}</h3>
            <div className="answer-collapse">
                <p>{props.answer}</p>
            </div>
        </div>
    );
}