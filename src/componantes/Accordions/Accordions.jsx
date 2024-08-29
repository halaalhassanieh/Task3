import { useState } from 'react'
import './Accordions.css'

const Accordions = () => {
  const [Select,setSelect]=useState(null)

  const toggle = (i)=>{
    if (Select == i){
      return setSelect(null)
    }
    setSelect(i)
  }

  const [ AccordionData ]=useState([
    {
      question:'Best Useful Links?',
      info:'Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.',
   
  },
  {
    question:'How does This Work? ',
    info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quas perferendis architecto nulla esse sunt doloribus?',
    

},
{
  question:'Why is Villa agency The Best? ',
  info:'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Quas perferendis architecto nulla esse sunt doloribus?',
 

},

])


  return (

    <div className='AccordionSection'>
      <div className='title'>Featured </div>
      <div className='appartment'>Best <br />Appartment &<br /> Sea View</div>
      
      
      <div className="container">

               {
                AccordionData.map((e,i)=>{
                  return(
                    <div key={i}>
                    <button className={Select==i ?'colorLine':'line'} onClick={()=>toggle(i)}> 
                    {e.question}</button>
                    <div className={Select== i ? 'showInfo':'Info'}  >
                        {e.info}
                    </div> 
                    </div>
                  )
                })
               }

      </div>

    </div>

  )
}

export default Accordions
