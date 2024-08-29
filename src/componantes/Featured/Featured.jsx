import './Featured.css' 
import sideImg from '../../assets/Featured.jpg'
import featuredIcon from '../../assets/featured-icon.Png'
import Accordions from '../Accordions/Accordions';
import { useState } from 'react';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import infoIcon1 from '../../assets/info-icon-01.Png'
import infoIcon2 from '../../assets/info-icon-02.Png'
import infoIcon3 from '../../assets/info-icon-03.Png'
import infoIcon4 from '../../assets/info-icon-04.Png'





const Featured = () => {
  const [FeaturedCardData]=useState([
    {
        img: infoIcon1,
        title:'250 m2',
        subtitle:"Total Flat Space",
    },
    {
        img:infoIcon2,
        title:'Contract',
        subtitle:"Contract Ready",
    },
    {
        img:infoIcon3,
        title:'Payment',
        subtitle:"Payment Process",

    },
    {
        img:infoIcon4,
        title:'Safety',
        subtitle:"24/7 Under Control",
    },
  ]) 


    return ( 
    <>
    <section>+
       <div className='featured'>

        <div className='sideImgContainer'> <img src={sideImg} className='sideImg' />
               <div className='iconContainer'> <img src={featuredIcon} className='featuredIcon' /></div>
        </div>
     
        <div className='accordionSection'> <Accordions/> </div>

        <div className='FeaturedCardBox'>
            {
              FeaturedCardData.map((e,i)=>{
                return(

                   <div key={i}>
                     <FeaturedCard  img={e.img} title={e.title} subtitle={e.subtitle} />
                     <hr />
                   </div>

                )
              })


            }
        </div>
    </div>
    </section>

    </> );
}
 
export default Featured;