import { Briefcase, Building2, Landmark, Scale, ShieldCheck } from 'lucide-react'
import contenciosoImage from '../assets/departamentos/contencioso.jpg'
import empresarialImage from '../assets/departamentos/empresarial.jpg'
import publicoImage from '../assets/departamentos/publico.jpg'
import patrimonioImage from '../assets/departamentos/patrimonio.jpg'
import trabalhoImage from '../assets/departamentos/trabalho.jpg'
import helenaPhoto from '../assets/equipe/helena-antunes.jpg'
import helenaPortrait from '../assets/equipe/retratos/helena-antunes.jpg'
import rafaelPhoto from '../assets/equipe/rafael-veiga.jpg'
import rafaelPortrait from '../assets/equipe/retratos/rafael-veiga.jpg'
import marinaPhoto from '../assets/equipe/marina-castro.jpg'
import marinaPortrait from '../assets/equipe/retratos/marina-castro.jpg'
import tiagoPhoto from '../assets/equipe/tiago-moreira.jpg'
import tiagoPortrait from '../assets/equipe/retratos/tiago-moreira.jpg'
import camilaPhoto from '../assets/equipe/camila-rocha.jpg'
import camilaPortrait from '../assets/equipe/retratos/camila-rocha.jpg'

export const departments = [
  {
    number: '01',
    name: 'Contencioso Estratégico',
    icon: Scale,
    image: contenciosoImage,
    photo: helenaPhoto,
    portrait: helenaPortrait,
    lawyer: 'Helena Antunes',
    specialty: 'Litígios complexos',
    service:
      'Condução de causas sensíveis, da definição da estratégia à sustentação oral nos tribunais superiores.',
  },
  {
    number: '02',
    name: 'Direito Empresarial',
    icon: Building2,
    image: empresarialImage,
    photo: rafaelPhoto,
    portrait: rafaelPortrait,
    lawyer: 'Rafael Veiga',
    specialty: 'Direito Societário',
    service:
      'Assessoria contínua para sociedades, contratos, reorganizações e decisões de negócio.',
  },
  {
    number: '03',
    name: 'Direito Público',
    icon: Landmark,
    image: publicoImage,
    photo: marinaPhoto,
    portrait: marinaPortrait,
    lawyer: 'Marina Castro',
    specialty: 'Direito Administrativo',
    service:
      'Atuação consultiva e contenciosa perante a Administração Pública e órgãos de controle.',
  },
  {
    number: '04',
    name: 'Patrimônio & Sucessões',
    icon: ShieldCheck,
    image: patrimonioImage,
    photo: tiagoPhoto,
    portrait: tiagoPortrait,
    lawyer: 'Tiago Moreira',
    specialty: 'Planejamento Sucessório',
    service:
      'Planejamento patrimonial e sucessório com discrição, segurança jurídica e visão de longo prazo.',
  },
  {
    number: '05',
    name: 'Direito do Trabalho',
    icon: Briefcase,
    image: trabalhoImage,
    photo: camilaPhoto,
    portrait: camilaPortrait,
    lawyer: 'Camila Rocha',
    specialty: 'Relações de Trabalho',
    service:
      'Prevenção de passivos, negociações coletivas e defesa em demandas trabalhistas de alta exposição.',
  },
]
