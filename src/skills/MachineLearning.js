import React from "react";
import "./Skill.css";
import NumpyIcon from '../assets/icons/Numpy.svg';
import PytorchIcon from '../assets/icons/Pytorch.svg';
import MatplotlibIcon from '../assets/icons/Matplotlib.svg';
import PandasIcon from '../assets/icons/Pandas.svg';

function MachineLearning() {
    return (
        <div id="ml" className="skill">
            <div>
                <h1 className='skill-title'>Machine Learning</h1>
            </div>
            <div className='icons-container'>
                <div><img src={NumpyIcon} alt='Numpy' className='icon'></img></div>
                <div><img src={PytorchIcon} alt='Pytorch' className='icon'></img></div>
                <div><img src={MatplotlibIcon} alt='Matplotlib' className='icon'></img></div>
                <div><img src={PandasIcon} alt='Pandas' className='icon'></img></div>
            </div>
        </div>
    );
}

export default MachineLearning;