import React from 'react';
import './Skills.css';
import ProgrammingLang from './ProgrammingLang';
import PlatformAndFrame from './PlatformAndFrame';
import MachineLearning from './MachineLearning';
import Web from './Web';

function Skills() {
    return (
        <section id='skills' className="skills">
            <ProgrammingLang />
            <Web />
            <PlatformAndFrame />
            <MachineLearning />
        </section>
    );
}

export default Skills;