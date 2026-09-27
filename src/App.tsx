import Header from './components/Header'
import Hero from './components/Hero'
import Historia from './components/Historia'
import Areas from './components/Areas'
import Especializacoes from './components/Especializacoes'
import Situacoes from './components/Situacoes'
import Atuacao from './components/Atuacao'
import Detalhamento from './components/Detalhamento'
import Empresas from './components/Empresas'
import Socios from './components/Socios'
import Mapas from './components/Mapas'
import Presenca from './components/Presenca'
import ComoFunciona from './components/ComoFunciona'
import Faq from './components/Faq'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'
import WhatsappFloat from './components/WhatsappFloat'

function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <Historia />
        <Areas />
        <Especializacoes />
        <Situacoes />
        <Atuacao />
        <Detalhamento />
        <Empresas />
        <Socios />
        <Mapas />
        <Presenca />
        <ComoFunciona />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  )
}

export default App
