import Header from './components/Header'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Method from './components/Method'
import Departments from './components/Departments'
import Office from './components/Office'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-void text-white">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Method />
        <Departments />
        <Office />
      </main>
      <Footer />
    </div>
  )
}

export default App
