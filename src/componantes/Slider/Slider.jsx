import './Slider.css'
import img1 from '../../assets/banner-01.jpg'
import img2 from '../../assets/banner-02.jpg'
import img3 from '../../assets/banner-03.jpg'
import { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Hero from '../Hero/Hero'


const Slider = () => {

  const [slide, setSlide] = useState(0);
  const [data]=useState([
    {
      "src": img1,
      "alt": "Image 1 for carousel"
    },
    {
      "src":img2,
      "alt": "Image 2 for carousel"
    },
    {
      "src": img3,
      "alt": "Image 3 for carousel"
    }
  ])
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

     
    return (  
        <>
         <section>
          <Hero/>
         <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, i) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={i}
            className={slide === i ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, i) => {
          return (
            <button
              key={i}
              className={
                slide === i ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(i)}
            ></button>
          );
        })}
      </span>
    </div>
  </section>





        
        </>
    );
}
 
export default Slider;