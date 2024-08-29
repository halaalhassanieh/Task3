import './VideoSection.css'
import videoBackground from '../../assets/img.jpg'
import videoFrame from '../../assets/video-frame.jpg'
import { useState } from 'react'
import { FaPlay } from "react-icons/fa";
import SectionHead from '../SectionHead/SectionHead';

const VideoSection = () => {
    const [miniCardData]=useState([
        {
           num:'34',
           text:'Buildings Finished Now ',
        },
        {
            num:'12',
            text:'Years Experience ',
         },
         {
            num:'24',
            text:'Awards Won 2023 ',
         },
    ])
  return (
        <section className='VideoSection'>
            
        
        <div className='background'>
        <div className='headContainer'>
            <SectionHead title='Video View' subs='Get Closer View & Different Feeling'/></div>
        
        </div>

        <div className="video-frame">
                        <img src={videoFrame} alt="img video" />
                        <a href="https://youtube.com">
                        <FaPlay />
                        </a>
         </div>
         <div className='minicards'>
            {
                miniCardData.map((e,i)=>{
                    return(
                        <div key={i} className='minicard'>
                            <div className='circle'></div>
                            <div className='num'>
                                {e.num}
                            </div>
                            <div className='text'>
                                {e.text}
                            </div>
                        </div>
                    )
                })
            }
         </div>

        </section>    
  )
}

export default VideoSection
