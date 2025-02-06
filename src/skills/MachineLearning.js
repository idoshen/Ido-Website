import React from "react";
import "./Skill.css";
import NumpyIcon from '../assets/icons/Numpy.svg';
import PytorchIcon from '../assets/icons/Pytorch.svg';
import MatplotlibIcon from '../assets/icons/Matplotlib.svg';
import PandasIcon from '../assets/icons/Pandas.svg';

function MachineLearning() {
    return (
        <section id="ml" className="skill">
            <div className="skill-container right-to-left animate">
                <div className='text'>
                    <h1 className='skill-title'>Machine Learning</h1>
                    <p className='skill-p'>I have explored various areas of machine learning through courses and self-initiated projects. My experience includes fine-tuning a Sentence-BERT model for semantic similarity in Hebrew (<span className="red-text"><strong>NLP</strong></span>), developing a Double Deep Q-Network agent for Sokoban game (<span className="red-text"><strong>RL</strong></span>), implementing an image captioning model with ResNet152 and LSTM (<span className="red-text"><strong>Computer Vision</strong></span>), and conducting statistical analysis for myocardial infarction detection (<span className="red-text"><strong>Data Analysis</strong></span>).</p>
                </div>
                <div className='icons-4'>
                    <div><img src={NumpyIcon} alt='Numpy' className='big-icon'></img></div>
                    <div><img src={PytorchIcon} alt='Pytorch' className='big-icon'></img></div>
                    <div><img src={MatplotlibIcon} alt='Matplotlib' className='big-icon'></img></div>
                    <div><img src={PandasIcon} alt='Pandas' className='big-icon'></img></div>
                </div>
            </div>
        </section>
    );
}

export default MachineLearning;