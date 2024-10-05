import React from "react";

function Question({question, answer}){
    return(
        <div className="faq-question">
            <h3>{question}</h3>
            <div className="answer-collapse"></div>
        </div>
    );
}