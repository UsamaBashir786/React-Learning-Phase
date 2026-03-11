import CardItem from "./CardItem"

const CardsSection = ({ heading, cards }) => {
  return (
    <section className="px-20 py-20">

      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        {heading}
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {cards.map((card) => (
          <CardItem
            key={card.id}
            icon={card.icon}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>

    </section>
  )
}

export default CardsSection