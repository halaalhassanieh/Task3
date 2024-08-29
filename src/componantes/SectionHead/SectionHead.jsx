import './SectionHead.css'



const SectionHead = ({title,subs}) => {
  return (
    <div >
           <div className='title'>{title} </div>
           <div className='subs'>{subs}</div>
    </div>
  )
}

export default SectionHead
