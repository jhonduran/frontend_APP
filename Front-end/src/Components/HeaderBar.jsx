import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import storage from '../Storage/storage'
import servicityLogo from '../assets/servicity_logo.png'
import { sendRequest } from '../utils/sendRequest';

export default function HeaderBar() {
  const [menuIsVisible, setMenuVisible] = useState(false)
  const go = useNavigate();

  const logout = async(e) => {
    e.preventDefault();
    const res = await sendRequest({method: 'POST', params: {}, url: '/logout', redir: '/home', token: true});
    if(res.success){
      storage.remove('authToken');
      storage.remove('authUser');
    }
  }

  const showMenu = (event) => {
    event.preventDefault();
    setMenuVisible(!menuIsVisible);
  }

  useEffect(() => {
    setMenuVisible(false)
  }, [])

  // Menu items component to avoid duplication
  const MenuItems = () => (
    <>
      <Link to='/home' className='p-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'>Inicio</Link>
      <Link to='/search' className='p-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'>Buscar especialistas</Link>
      {storage.get('authUser')?.user_type === 'admin' ? (
        <Link to='/admin-dashboard' className='p-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'>Panel de control</Link>
      ) : storage.get('authUser')?.user_type === 'tasker' ? (
        <Link to='/tasker-dashboard' className='p-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'>Panel de control</Link>
      ) : storage.get('authUser')?.user_type === 'client' ? (
        <Link to='/client-dashboard' className='p-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'>Panel de control</Link>
      ) : (
        <Link to='/register-tasker' className='p-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'>Convertirme en consultor</Link>
      )}
      <Link to='/about-us' className='p-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'>Sobre nosotros</Link>
      {storage.get('authUser') ? (
        <>
          <Link to='/profile' className='p-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'>Mi cuenta</Link>
          <Link onClick={logout} className='p-3 text-sm font-medium text-red-600 hover:text-red-700 transition-colors'>Cerrar sesión</Link>
        </>
      ): (
        <Link to='/login' className='p-3 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors'>Acceder</Link>
      )}
    </>
  )

  return (
    <header className='w-full bg-white shadow-sm border-b border-gray-100'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center gap-2'>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">DataExpert</span>
          </div>

          {/* Desktop Menu (hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-1">
            <MenuItems />
          </div>

          {/* Mobile menu button (hidden on desktop) */}
          <div className="md:hidden">
            <button
              onClick={showMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden on desktop) */}
      <div className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${menuIsVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMenuVisible(false)}
        ></div>
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${menuIsVisible ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <span className="text-lg font-bold text-gray-900">DataExpert</span>
              </div>
              <button
                onClick={() => setMenuVisible(false)}
                className="text-gray-500 hover:text-blue-600"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col space-y-2">
              <MenuItems />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
