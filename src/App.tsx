import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Departments from './components/Departments'
import Office from './components/Office'
import Footer from './components/Footer'

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Departments />
      <Office />
      <Footer />
    </main>
  )
}

export default App
