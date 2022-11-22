import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const HeroSection = ({ newsMessage, title, subTitle }: { newsMessage: string, title: string, subTitle: string }) => {
    return (
        <div className="bg-white pb-8 sm:pb-12 lg:pb-12">
            <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div>
                        <div className="mt-20">
                            <div>
                                <a href="#" className="inline-flex space-x-4">
                                    <span className="rounded bg-indigo-50 px-2.5 py-1 text-sm font-semibold text-indigo-600">
                                        Nyhed
                                    </span>
                                    <span className="inline-flex items-center space-x-1 text-sm font-medium text-indigo-600">
                                        <span>{newsMessage}</span>
                                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                </a>
                            </div>
                            <div className="mt-6 sm:max-w-xl">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                    {title}
                                </h1>
                                <p className="mt-6 text-xl text-gray-500">
                                    {subTitle}
                                </p>
                            </div>
                            <form action="#" className="mt-12 sm:flex sm:w-full sm:max-w-lg">
                                <div className="min-w-0 flex-1">
                                    {/* <div className="relative rounded-md border border-gray-300 px-5 py-3 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                                        <label
                                            htmlFor="email"
                                            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="block w-full border-0 p-0 text-base text-gray-900 placeholder-gray-500 focus:ring-0"
                                            placeholder="Indtast din email her"
                                        />
                                    </div> */}
                                    <label htmlFor="hero-email" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="hero-email"
                                        type="email"
                                        required
                                        className="block w-full rounded-md border border-gray-300 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        placeholder="Indtast din email her"
                                    />
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-3">
                                    <button
                                        type="submit"
                                        className="block w-full rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                                    >
                                        Giv mig besked
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
                    <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <div className="hidden sm:block">
                            <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
                            <svg
                                className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
                                width={404}
                                height={392}
                                fill="none"
                                viewBox="0 0 404 392"
                            >
                                <defs>
                                    <pattern
                                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                                        x={0}
                                        y={0}
                                        width={20}
                                        height={20}
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                    </pattern>
                                </defs>
                                <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                            </svg>
                        </div>
                        <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
                            <img
                                className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection