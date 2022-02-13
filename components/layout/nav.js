import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Footer from '../layout/footer'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav(props) {
    return (
        <div className="h-16 sticky top-0 z-10">
            <main>
                <Disclosure as="nav">
                    {({ open }) => (
                        <>
                            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between">
                                    <div className="flex">
                                        <div className="flex-shrink-0 flex items-center">
                                        <Link href="/">
                                            <img
                                                className="cursor-pointer block lg:hidden h-14 w-auto mt-2"
                                                src="../assets/credmark-logo.png"
                                                alt="Workflow"
                                            />
                                        </Link>
                                            <Link href="/">
                                                <img
                                                    width={250}
                                                    className="cursor-pointer h-auto hidden lg:block flex justify-start m-0 mt-4 px-10"
                                                    src="../assets/credmark-logo-purple.png"
                                                    alt="Credmark logo"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="hidden sm:ml-8 sm:flex sm:items-center">

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="ml-3 relative">
                                            <div>
                                                <Menu.Button>
                                                    <span className="sr-only">Open user menu</span>
                                                    <div className="mx-5 border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                                    <Link
                                                        href="/contributors"
                                                    >
                                                        Contributors
                                                    </Link>
                                                    </div>
                                                    <div className="mx-5 border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                                    <Link
                                                        href="/blog"
                                                        className="mx-8 border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                                    >
                                                        Blog
                                                    </Link>
                                                    </div>
                                                    <div className="mx-5 border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                                    <Link
                                                        href="/media"
                                                        className="mx-8 border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                                    >
                                                        Media
                                                    </Link>
                                                    </div>
                                                    <div className="mx-5 border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                                    <Link
                                                        href="https://discord.com/invite/3dSfMqP3d4"
                                                        className="mx-8 border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                                    >
                                                        Discord
                                                    </Link>
                                                    </div>
                                                    <a
                                                        href="https://app.credmark.com/"
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        <button
                                                            type="button"
                                                            className="transform hover:scale-110 ml-5 px-5 uppercase mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-credmarkpurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                        >
                                                            APP
                                                        </button>
                                                    </a>
                                                </Menu.Button>
                                            </div>
                                        </Menu>
                                    </div>
                                    <div className="-mr-2 flex items-center sm:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="sm:hidden">
                                <div className="pt-2 pb-3 space-y-1">
                                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                                    <Disclosure.Button
                                        as="a"
                                        href="/contributors"
                                        className="border-transparent block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                    >
                                      Contributors
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                        as="a"
                                        href="/blog"
                                        className="border-transparent block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                    >
                                        Blog
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                        as="a"
                                        href="/media"
                                        className="border-transparent block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                    >
                                        Media
                                    </Disclosure.Button>
                                    <Disclosure.Button
                                        as="a"
                                        href="https://discord.com/invite/3dSfMqP3d4"
                                        className="border-transparent block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                                    >
                                        Discord
                                    </Disclosure.Button>
                                    <a
                                        href="https://app.credmark.com/"
                                        target="_blank"
                                        rel="noreferrer">
                                        <button
                                            type="button"
                                            className="ml-3 px-5 uppercase mt-5 inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white bg-credmarkpurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            APP
                                        </button>
                                    </a>
                                </div>
                                <div className="pt-4 pb-3 border-t border-gray-200">
                                    <div className="flex items-center px-4">
                                    </div>
                                    <div className="mt-3 space-y-1">

                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                {props.page}
            </main>
        </div>
    )
}

