import Header from './components/Header'
import Hero from './components/Hero'
import Areas from './components/Areas'
import Method from './components/Method'
import Departments from './components/Departments'
import Testimonial from './components/Testimonial'
import Office from './components/Office'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-parchment text-ink">
      <Header />
      <main>
        <Hero />
        <Areas />
        <Method />
        <Departments />
        <Testimonial />
        <Office />
      </main>
      <Footer />
    </div>
  )
}

export default App
