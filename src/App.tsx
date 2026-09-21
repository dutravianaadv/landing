import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Practices from './components/Practices'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Practices />
      <Team />
      <Footer />
    </main>
  )
}

export default App
