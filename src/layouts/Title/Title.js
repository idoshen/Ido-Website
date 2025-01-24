import React from "react";
import "./Title.css";

function Title({ id, title, className }) {
    return (
        <section id={id} className={`${className}`}>
            <div className={`title-container`}>
                <h1 className={`${className}-text`}>{title}</h1>
            </div>
        </section>
    );
}

export default Title;