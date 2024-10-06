import React from "react";

function Question({question, answer}){
    return(
        <div className="faq-question">
            <h3>{question}</h3>
            <div className="answer-collapse">
                <p>{answer}</p>
            </div>
        </div>
    );
}

export default Question;