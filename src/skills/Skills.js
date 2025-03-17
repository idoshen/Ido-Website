import React from 'react';
import './Skills.css';
import ProgrammingLang from './ProgrammingLang';
import PlatformAndFrame from './PlatformAndFrame';
import MachineLearning from './MachineLearning';
import Web from './Web';

function Skills() {
    return (
        <div className="dark-background">
            <section id='skills' className="skills">
                <ProgrammingLang />
                <Web />
                <PlatformAndFrame />
                <MachineLearning />
            </section>
        </div>
    );
}

export default Skills;