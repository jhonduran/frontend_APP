import React, { useState, useEffect } from 'react'
import HeaderBar from '../Components/HeaderBar'
import Footer from '../Components/Footer'
import usuario1 from '../assets/users/usuario1.jpg'
import usuario2 from '../assets/users/usuario2.jpg'
import usuario3 from '../assets/users/usuario3.jpg'
import usuario4 from '../assets/users/usuario4.jpg'

// Consultores de datos simulados
const mockConsultants = [
  {
    id: 1,
    name: 'Carlos Sánchez R.',
    title: 'Data Scientist Senior',
    image: usuario1,
    description: 'Especialista en machine learning y modelos predictivos con 8+ años de experiencia. Experto en Python, TensorFlow y análisis estadístico avanzado.',
    availability: 'Disponible inmediatamente',
    rate: 150000,
    rateType: 'hora',
    experience: 8,
    rating: 4.9,
    reviews: 47,
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL', 'Estadística'],
    certifications: ['AWS Certified Data Analytics', 'Google Professional Data Engineer'],
    location: 'Remoto / Bogotá',
    projectsCompleted: 89
  },
  {
    id: 2,
    name: 'Leidy Cárdenas V.',
    title: 'Business Intelligence Analyst',
    image: usuario2,
    description: 'Consultora BI con enfoque en visualización de datos y dashboards interactivos. Especialista en PowerBI, Tableau y transformación de datos complejos en insights accionables.',
    availability: 'Disponible desde la próxima semana',
    rate: 120000,
    rateType: 'hora',
    experience: 6,
    rating: 4.8,
    reviews: 32,
    skills: ['PowerBI', 'Tableau', 'SQL', 'Excel', 'DAX'],
    certifications: ['Microsoft Certified: Power BI Analyst Associate'],
    location: 'Remoto / Medellín',
    projectsCompleted: 65
  },
  {
    id: 3,
    name: 'Manuel Restrepo C.',
    title: 'Data Engineer',
    image: usuario3,
    description: 'Ingeniero de datos especializado en ETL, pipelines y arquitectura de datos cloud. Experiencia en AWS, GCP, Spark y optimización de warehouses.',
    availability: 'Disponible inmediatamente',
    rate: 140000,
    rateType: 'hora',
    experience: 7,
    rating: 4.9,
    reviews: 28,
    skills: ['AWS', 'Spark', 'Python', 'SQL', 'Airflow', 'Kafka'],
    certifications: ['AWS Certified Solutions Architect', 'Databricks Data Engineer'],
    location: 'Remoto',
    projectsCompleted: 54
  },
  {
    id: 4,
    name: 'Andrea López M.',
    title: 'Machine Learning Engineer',
    image: usuario4,
    description: 'Especialista en despliegue de modelos ML en producción, MLOps y pipelines de ciencia de datos. Experiencia en NLP y visión por computadora.',
    availability: 'Disponible en 2 semanas',
    rate: 160000,
    rateType: 'hora',
    experience: 5,
    rating: 5.0,
    reviews: 19,
    skills: ['Python', 'PyTorch', 'Docker', 'Kubernetes', 'MLOps', 'NLP'],
    certifications: ['TensorFlow Developer Certificate'],
    location: 'Remoto / Cali',
    projectsCompleted: 41
  }
]

// Skills populares para filtrar
const popularSkills = [
  { name: 'Python', count: 120 },
  { name: 'Machine Learning', count: 85 },
  { name: 'SQL', count: 150 },
  { name: 'PowerBI', count: 95 },
  { name: 'Tableau', count: 68 },
  { name: 'AWS', count: 72 },
  { name: 'TensorFlow', count: 45 },
  { name: 'Data Engineering', count: 58 }
]

export default function SearchService() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredConsultants, setFilteredConsultants] = useState(mockConsultants)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedExperience, setSelectedExperience] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    let filtered = mockConsultants

    // Filtrar por término de búsqueda
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(consultant =>
        consultant.name.toLowerCase().includes(term) ||
        consultant.title.toLowerCase().includes(term) ||
        consultant.skills.some(skill => skill.toLowerCase().includes(term)) ||
        consultant.description.toLowerCase().includes(term)
      )
    }

    // Filtrar por experiencia
    if (selectedExperience !== 'all') {
      const [min, max] = selectedExperience.split('-').map(Number)
      filtered = filtered.filter(c => {
        if (max) {
          return c.experience >= min && c.experience <= max
        } else {
          return c.experience >= min
        }
      })
    }

    setFilteredConsultants(filtered)
  }, [searchTerm, selectedCategory, selectedExperience])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(amount)
  }

  const handleSkillClick = (skill) => {
    setSearchTerm(skill)
  }

  return (
    <>
      <HeaderBar />

      {/* Hero Section de búsqueda */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-2">Encuentra tu especialista ideal</h1>
          <p className="text-blue-200 mb-6">Más de 150 expertos en datos listos para transformar tu negocio</p>

          {/* Barra de búsqueda */}
          <div className="relative max-w-2xl">
            <input
              type="text"
              className="w-full px-6 py-4 pr-14 text-gray-900 bg-white rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Busca por skill, título o nombre (ej: Python, Data Scientist)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="absolute top-4 right-5 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Skills populares */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-500 py-2">Populares:</span>
            {popularSkills.slice(0, 6).map((skill, index) => (
              <button
                key={index}
                onClick={() => handleSkillClick(skill.name)}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
              >
                {skill.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de filtros */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Filtros</h3>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                    setSelectedExperience('all')
                  }}
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Limpiar
                </button>
              </div>

              {/* Filtro de experiencia */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Experiencia</h4>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'Todas' },
                    { value: '1-3', label: '1-3 años' },
                    { value: '4-6', label: '4-6 años' },
                    { value: '7-10', label: '7-10 años' },
                    { value: '10-', label: '10+ años' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="experience"
                        value={option.value}
                        checked={selectedExperience === option.value}
                        onChange={(e) => setSelectedExperience(e.target.value)}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Skills más buscados */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Skills en demanda</h4>
                <div className="space-y-2">
                  {popularSkills.slice(0, 5).map((skill, index) => (
                    <button
                      key={index}
                      onClick={() => handleSkillClick(skill.name)}
                      className="flex items-center justify-between w-full text-left hover:bg-gray-50 p-2 rounded transition-colors"
                    >
                      <span className="text-sm text-gray-600">{skill.name}</span>
                      <span className="text-xs text-gray-400">({skill.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lista de consultores */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                {filteredConsultants.length} especialista{filteredConsultants.length !== 1 ? 's' : ''} encontrado{filteredConsultants.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="space-y-4">
              {filteredConsultants.length > 0 ? (
                filteredConsultants.map((consultant) => (
                  <div
                    key={consultant.id}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Imagen y rating */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img
                            src={consultant.image}
                            alt={consultant.name}
                            className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover"
                          />
                          {consultant.availability.includes('inmediatamente') && (
                            <span className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
                          )}
                        </div>
                        <div className="flex items-center mt-2">
                          <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="ml-1 text-sm font-medium text-gray-900">{consultant.rating}</span>
                          <span className="ml-1 text-sm text-gray-500">({consultant.reviews})</span>
                        </div>
                      </div>

                      {/* Información principal */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{consultant.name}</h3>
                            <p className="text-blue-600 font-medium">{consultant.title}</p>
                          </div>
                          <div className="text-right md:text-right">
                            <p className="text-2xl font-bold text-gray-900">{formatCurrency(consultant.rate)}</p>
                            <p className="text-sm text-gray-500">por {consultant.rateType}</p>
                          </div>
                        </div>

                        <p className="text-gray-600 mt-3 text-sm leading-relaxed">{consultant.description}</p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {consultant.experience} años exp.
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {consultant.projectsCompleted} proyectos
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {consultant.location}
                          </span>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {consultant.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Certificaciones */}
                        {consultant.certifications && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {consultant.certifications.map((cert, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                              >
                                <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {cert}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Disponibilidad */}
                        <div className="mt-4 flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${consultant.availability.includes('inmediatamente') ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                          <span className="text-sm text-gray-600">{consultant.availability}</span>
                        </div>

                        {/* Botón */}
                        <div className="mt-4 flex justify-end">
                          <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                            Solicitar Propuesta
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                  <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-gray-500 text-lg mb-2">No se encontraron especialistas</p>
                  <p className="text-gray-400 text-sm">Prueba con otros términos de búsqueda</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
