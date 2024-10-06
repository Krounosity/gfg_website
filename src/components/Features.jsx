import React from "react";
import '../styles/features.sass';

function Features({title, content, image}){
    return(
        <div className="features">
            <img src={image}></img>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}

export default Features;