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
                <div className='text text-right'>
                    <h2 className='skill-title'>Machine Learning</h2>
                    <p className='skill-p'>I have explored various areas of machine learning through courses and self-initiated projects. My experience includes Natural Language Processing, Reinforcement Learning, Deep Learning, Computer Vision, as well as statistics and data analysis.</p>
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