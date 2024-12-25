import { Header } from './components/header'
import { Hero } from './components/hero'
import { Features } from './components/features'
import { Schools } from './components/schools'
import { WhyChooseUs } from './components/why-choose-us'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Schools />
        <WhyChooseUs />
      </main>
    </div>
  )
}

