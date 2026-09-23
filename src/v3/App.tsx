import Header from './components/Header'
import Hero from './components/Hero'
import Method from './components/Method'
import Reports from './components/Reports'
import Departments from './components/Departments'
import Office from './components/Office'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white text-olive">
      <Header />
      <main>
        <Hero />
        <Method />
        <Reports />
        <Departments />
        <Office />
      </main>
      <Footer />
    </div>
  )
}

export default App
