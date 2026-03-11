import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import CardSection from "./components/cards/CardSection"

function App() {

  const navLinks = ["Home", "About", "Projects"]

  const heroData = {
    badge: "🚀 New Course Out Now",
    heading: "React Seekho Project Banao",
    subtext: "Atomic + Feature structure ke saath professional projects banana seekho.",
    btnLabel: "Shuru Karo",
    image: "https://plus.unsplash.com/premium_photo-1771443493325-04fb5aa67775?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }

  const aboutData = {
    heading: "Ye Platform Kya Hai?",
    description: "Yahan hum React, Tailwind aur real project structure seekhte hain. Theory nahi, seedha kaam karte hain.",
  }

  const cardsData = {
    heading: "Kya Seekhoge?",
    cards: [
      { id: 1, icon: "⚛️", title: "React Basics",      desc: "Components, JSX, Props" },
      { id: 2, icon: "🎨", title: "Tailwind CSS",      desc: "Utility classes se styling" },
      { id: 3, icon: "🗂️", title: "Project Structure", desc: "Atomic + Feature based" },
    ]
  }

  return (
    <div>
      <Navbar brand="DevLearn" links={navLinks} />
      <Hero   data={heroData} />
      <About  heading={aboutData.heading} description={aboutData.description} />
      <CardSection heading={cardsData.heading} cards={cardsData.cards} />
    </div>
  )
}

export default App
