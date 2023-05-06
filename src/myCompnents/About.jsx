import React from 'react'
import ReactPlayer from "react-player";
import '../styles/About.css';
export default function About() {
  return (
    <div className='aboutcontainer'>
        <hr />
        <h3>Project Brief:</h3>
        <div className='AboutFram'>
            <p>The “Ten Billion Tree Tsunami” Programme is a government of Pakistan initiative which is being implemented by the Ministry of Climate Change with the support of Provincial forests and wildlife units. The Ministry of Climate Change is overseeing the program coordination, execution, supervision, and overall delivery of the program outputs and activities.
            Reports suggest that Pakistan is among the most vulnerable countries on the Global Climate Index which has been recurrently impacted by catastrophes, made worse by the deteriorating climate conditions.</p>
            <div>
            <ReactPlayer className='video' url="https://youtu.be/8fqiCsYDUD8"/>
            </div>
        </div>
        <hr />
        <div>
            <h3>Members:</h3>
            <button className='buttons'>Sami Ullah</button>
            <button className='buttons'>Hamza Ali Khan</button>
            <button className='buttons'>Haris Qayum</button>
        </div>
        
    </div>
  )
}
