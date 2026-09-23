import Header from './components/Header'
import Hero from './components/Hero'
import Method from './components/Method'
import Firm from './components/Firm'
import Departments from './components/Departments'
import Office from './components/Office'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-canvas text-ivory">
      <Header />
      <main>
        <Hero />
        <Method />
        <Firm />
        <Departments />
        <Office />
      </main>
      <Footer />
    </div>
  )
}

export default App
