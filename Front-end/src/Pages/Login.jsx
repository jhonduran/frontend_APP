import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router';
import { sendRequest } from '../utils/sendRequest';
import storage from '../Storage/storage';
import backgroundLogin from '../assets/work_balance.jpg';
import { rootAxios } from '../axios';
import { ToastContainer, showToast } from '../utils/Toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem('rememberedEmail');
    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, [])

  const go = useNavigate();

  const csrf = async () => {
    await rootAxios.get('/sanctum/csrf-cookie')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(loading == false) {

      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      setLoading(true);
      try {
        console.log('Login attempt:', { email, password, rememberMe });
        await csrf();
        const form = { email: email, password: password };
        const res = await sendRequest({method: 'POST', params: form, url: '/login', token: false});

        console.log(res);

        if (res.success == true) {
          storage.set('authToken', res.data.token);
          storage.set('authUser', res.data.user);
          console.log(res.data.user);

          showToast('Acceso exitoso', 'success');
          setTimeout(() => {
            if(res.data.user.user_type == 'tasker'){
              go('/tasker-dashboard');
            }else if(res.data.user.user_type == 'admin'){
              go('/admin-dashboard');
            }else{
              go('/client-dashboard');
            }
          }, 1000);
        }else{
          showToast(res.data.message, 'error');
        }
      } catch (error) {
        console.log(error);
        showToast('Ha ocurrido un error', 'error');
      }
      setLoading(false);
    }

  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleGitHubLogin = () => {
    console.log('GitHub login clicked');
  };



  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center flex-row lg:items-stretch lg:content-stretch lg:justify-start gap-0'>
      <div className='flex items-center justify-center p-4 min-w-[400px] w-[50%] lg:justify-end'>
        <div className='p-8 lg:p-16 w-full max-w-md'>
          {/* Logo */}
          <div className='flex justify-center mb-8'>
            <div className='flex items-center gap-2'>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <span className="text-2xl font-bold text-gray-900">DataExpert</span>
            </div>
          </div>

          {/* Title */}
          <h1 className='text-2xl font-bold text-gray-900 text-center mb-2'>
            Accede a tu cuenta
          </h1>

          {/* Subtitle */}
          <p className='text-gray-600 text-center mb-8'>
            ¿No tienes una?{' '}
            <Link to='/register' className='text-blue-600 hover:text-blue-500 font-medium'>
                Crea tu cuenta ahora mismo
            </Link>
          </p>

          {/* Form */}
          <form className='space-y-6' onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                Correo electrónico
              </label>
              <input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Ingresa tu correo electrónico'
                autoComplete='mail'
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2'>
                Contraseña
              </label>
              <input
                id='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                placeholder='Ingresa tu contraseña de usuario'
                autoComplete='current-password'
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='remember-me'
                  type='checkbox'
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                />
                <label htmlFor='remember-me' className='ml-2 block text-sm text-gray-700'>
                  Recordar mi cuenta
                </label>
              </div>
              <a href='#' className='text-sm text-blue-600 hover:text-blue-500'>
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Login Button */}

            {loading ? (
              <button
                className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition duration-200'
              >
                <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                </svg>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition duration-200'
              >
                Ingresar
              </button>
            )}

          </form>

          {/* Divider */}
          <div className='mt-6'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300' />
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-gray-50 text-gray-500'>O accede con</span>
              </div>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className='mt-6 grid grid-cols-2 gap-3'>
            <button
              onClick={handleGoogleLogin}
              className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer transition duration-200'
            >
              <svg className='w-5 h-5' viewBox='0 0 24 24'>
                <path fill='#4285F4' d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z' />
                <path fill='#34A853' d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z' />
                <path fill='#FBBC05' d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z' />
                <path fill='#EA4335' d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z' />
              </svg>
              <span className='ml-2'>Google</span>
            </button>

            <button
              onClick={handleGitHubLogin}
              className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer transition duration-200'
            >
              <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='20' height='20' viewBox='0 0 48 48'>
                <path fill="#000" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
                <path fill='#fff' d='M22.55 30.16c-.29-.58-.58-1.16-.87-1.74-.46.09-.91.09-1.37.09-2.79 0-5-2.05-5-5.26 0-1.05.35-2.09 1.05-2.79-.09-.23-.23-.58-.35-.81-.12.12-.23.12-.35.12-1.51 0-2.67-1.16-2.67-2.67 0-.58.23-1.16.58-1.63-.23-.12-.46-.23-.7-.23-2.32 0-4.19 1.86-4.19 4.19 0 .35.12.7.23 1.05-.23-.12-.46-.12-.58-.12-2.32 0-4.19 1.86-4.19 4.19 0 1.51.81 2.79 2.09 3.49-.12.23-.23.46-.23.81 0 3.26 2.67 5.93 5.93 5.93h.12c-.7.81-1.16 1.86-1.16 2.9 0 3.38 3.84 4.77 8.49 4.77 4.65 0 8.49-1.39 8.49-4.77 0-2.67-1.98-5-4.88-5.7l-1.86-4.42z'></path>
              </svg>
              <span className='ml-2'>GitHub</span>
            </button>
          </div>
        </div>
      </div>
      <div className='hidden bg-blue-900 w-[50%] lg:flex'>
        <img src={backgroundLogin} className='object-cover opacity-40 w-full h-full grayscale'
        />
      </div>

      <ToastContainer/>
    </div>
  )
}

export default Login
