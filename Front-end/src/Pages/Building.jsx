import React from 'react'
import servicityLogo from '../assets/servicity_logo.png'
import { Link } from 'react-router'

export default function Building() {
    return (
        <>
            <div className="relative grid min-h-screen grid-cols-[1fr_2.5rem_auto_2.5rem_1fr] grid-rows-[1fr_1px_auto_1px_1fr] bg-white [--pattern-fg:var(--color-gray-950)]/5">
                <div className="col-start-3 row-start-3 flex max-w-lg flex-col bg-gray-100 p-2 ">
                    <div className="rounded-xl bg-white p-10 text-sm/7 text-gray-700">
                        <div className="flex justify-end">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-gray-900">DataExpert</span>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <p className="text-lg font-medium">Plataforma en construcción</p>
                            <p>Características próximas de DataExpert:</p>
                            <ul className="space-y-3">
                                <li className="flex">
                                    <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                                        <circle cx="11" cy="11" r="11" className="fill-blue-600/25" />
                                        <circle cx="11" cy="11" r="10.5" className="stroke-blue-600/25" />
                                        <path d="M8 11.5L10.5 14L14 8" className="stroke-blue-600 " />
                                    </svg>
                                    <p className="ml-3">Registro de especialistas en datos y análisis</p>
                                </li>
                                <li className="flex">
                                    <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                                        <circle cx="11" cy="11" r="11" className="fill-blue-600/25" />
                                        <circle cx="11" cy="11" r="10.5" className="stroke-blue-600/25" />
                                        <path d="M8 11.5L10.5 14L14 8" className="stroke-blue-600 " />
                                    </svg>
                                    <p className="ml-3">Búsqueda avanzada de consultores por skills</p>
                                </li>
                                <li className="flex">
                                    <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                                        <circle cx="11" cy="11" r="11" className="fill-blue-600/25" />
                                        <circle cx="11" cy="11" r="10.5" className="stroke-blue-600/25" />
                                        <path d="M8 11.5L10.5 14L14 8" className="stroke-blue-600 " />
                                    </svg>
                                    <p className="ml-3">Gestión de proyectos de datos y consultorías</p>
                                </li>
                                <li className="flex">
                                    <svg className="h-[1lh] w-5.5 shrink-0" viewBox="0 0 22 22" fill="none" strokeLinecap="square">
                                        <circle cx="11" cy="11" r="11" className="fill-blue-600/25" />
                                        <circle cx="11" cy="11" r="10.5" className="stroke-blue-600/25" />
                                        <path d="M8 11.5L10.5 14L14 8" className="stroke-blue-600 " />
                                    </svg>
                                    <p className="ml-3">Pagos seguros y sistema de reputación</p>
                                </li>
                            </ul>
                            <p>Conectamos empresas con los mejores especialistas en análisis de datos, ciencia de datos e inteligencia artificial.</p>
                        </div>
                        <hr className="my-6 w-full border-(--pattern-fg)" />
                        <p className="mb-3">¿Desea ver una previsualización de la plataforma?</p>
                        <p className="font-semibold">
                            <Link to="/Home" className="text-gray-950 underline decoration-blue-600 underline-offset-3 hover:decoration-2">Visitar página de inicio</Link>
                        </p>
                    </div>
                </div>
                <div className="relative -right-px col-start-2 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
                <div className="relative -left-px col-start-4 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
                <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)"></div>
                <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
            </div>
        </>
    )
}
