import Card from "../atoms/Card"

const CardItem = ({ icon, title, desc }) => {
  return (
    <Card 
      icon={icon} 
      title={title} 
      desc={desc} 
    />
  )
}

export default CardItem