import './FeaturedCard.css'

const FeaturedCard = ({img,title,subtitle}) => {
  return (
    <div className='FeaturedCard'>
      <div><img src={img} /></div>
      <div className='text'>
        <div className='CardTitle'>{title}</div>
        <div className='subtitle'>{subtitle}</div>
        
      </div>
      
    </div>
  )
}

export default FeaturedCard
