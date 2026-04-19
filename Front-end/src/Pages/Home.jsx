import React from 'react'
import { Link } from 'react-router'
import HeaderBar from '../Components/HeaderBar'
import Footer from '../Components/Footer'
import usuario1 from '../assets/users/usuario1.jpg'
import usuario2 from '../assets/users/usuario2.jpg'
import usuario3 from '../assets/users/usuario3.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search?skill=${encodeURIComponent(searchTerm)}`)
    }
  }

  // Categorías de servicios
  const categories = [
    {
      title: 'Análisis de Datos y BI',
      description: 'Dashboards, reportes y visualización',
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      skills: ['PowerBI', 'Tableau', 'SQL', 'Excel']
    },
    {
      title: 'Ciencia de Datos',
      description: 'Modelos predictivos y ML',
      icon: (
        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      skills: ['Python', 'R', 'Machine Learning', 'Estadística']
    },
    {
      title: 'Ingeniería de Datos',
      description: 'ETL, pipelines y warehousing',
      icon: (
        <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: ['ETL', 'Spark', 'Hadoop', 'AWS']
    },
    {
      title: 'Inteligencia Artificial',
      description: 'Deep Learning, NLP y LLMs',
      icon: (
        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ['Deep Learning', 'NLP', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'Consultoría Estratégica',
      description: 'Data strategy y gobernanza',
      icon: (
        <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      skills: ['Data Strategy', 'Governance', 'Arquitectura', 'BIM']
    },
    {
      title: 'Automatización',
      description: 'Analytics y optimización',
      icon: (
        <svg className="w-10 h-10 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      skills: ['A/B Testing', 'Analytics', 'Automatización', 'Optimización']
    }
  ]

  // Skills populares
  const popularSkills = ['Python', 'Machine Learning', 'SQL', 'PowerBI', 'Tableau', 'AWS']

  // Estadísticas
  const stats = [
    { number: '+1,500', label: 'Proyectos completados' },
    { number: '+300', label: 'Empresas satisfechas' },
    { number: '+150', label: 'Expertos certificados' },
    { number: '+2,500', label: 'Años de experiencia' }
  ]

  // Testimoniales corporativos
  const testimonials = [
    {
      name: 'TechStart SAS',
      role: 'Director de Operaciones',
      image: usuario1.jpg,
      rating: 5,
      text: 'Gracias a DataExpert, implementamos dashboards que redujeron nuestros tiempos de decisión en 40%. El equipo de consultores fue excepcional.'
    },
    {
      name: 'FinanceCorp',
      role: 'Head of Analytics',
      image: usuario2,
      rating: 5,
      text: 'El modelo de ML desarrollado predice nuestras ventas con 95% de precisión. Una inversión que se pagó sola en el primer trimestre.'
    },
    {
      name: 'RetailMax',
      role: 'CEO',
      image: usuario3,
      rating: 5,
      text: 'De datos desordenados a insights accionables en 3 semanas. El proceso fue profesional, rápido y los resultados superaron expectativas.'
    }
  ]

  // Cómo funciona
  const steps = [
    {
      step: '01',
      title: 'Publica tu proyecto',
      description: 'Describe qué necesitas: análisis, modelos, dashboards o consultoría.'
    },
    {
      step: '02',
      title: 'Recibe propuestas',
      description: 'Los mejores especialistas te envían propuestas detalladas en minutos.'
    },
    {
      step: '03',
      title: 'Elige al mejor',
      description: 'Compara experiencias, portafolios y tarifas. Elige el indicado.'
    },
    {
      step: '04',
      title: 'Obtén resultados',
      description: 'Colabora directamente y obtén soluciones data-driven medibles.'
    }
  ]

  return (
    <>
      <HeaderBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Expertos en{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Datos
              </span>{' '}
              para tu Empresa
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Conectamos empresas con los mejores especialistas en análisis de datos,
              ciencia de datos e inteligencia artificial. Resultados medibles, garantizados.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Busca especialistas en Python, Machine Learning, PowerBI..."
                  className="w-full px-6 py-4 pr-14 text-gray-900 bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {/* Popular Skills */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {popularSkills.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchTerm(skill)
                    navigate(`/search?skill=${encodeURIComponent(skill)}`)
                  }}
                  className="px-4 py-2 bg-white/10 text-white rounded-full text-sm hover:bg-white/20 transition-colors border border-white/20"
                >
                  {skill}
                </button>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/create-task"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
              >
                Publicar Proyecto
              </Link>
              <Link
                to="/register-tasker"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/30"
              >
                Convertirme en Consultor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Áreas de Especialización
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Encuentra especialistas en cada etapa del ciclo de datos, desde la recolección hasta la toma de decisiones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/search?category=${encodeURIComponent(category.title)}`}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">{category.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {category.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">¿Cómo Funciona?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Publica tu proyecto y conecta con expertos en minutos. Sin complicaciones, resultados garantizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-gray-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-lg text-gray-600">Empresas que han transformado sus datos en ventajas competitivas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para transformar tus datos?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Únete a cientos de empresas que ya están tomando decisiones basadas en datos.
          </p>
          <Link
            to="/create-task"
            className="inline-block px-10 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
          >
            Comenzar Ahora
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
