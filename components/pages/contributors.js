import AdvisorCard from '../layout/advisorCard'
import CenteredHeader from "../layout/centeredHeader"
import Footer from "../layout/footer"
import Subscribe from "../subscribe/subscribe"
import items from "../../styles/teamData"
import { useState } from 'react'
import Menu from '../filters/Menu'
import Button from '../filters/Button'
import Link from 'next/link'

const allCategories = ['All', ...items.map(item => item.category)];

export default function Team() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState([allCategories]);

    const filter = (button) => {

        if (button === 'All') {
            setMenuItem(items);
            return;
        }

        const filteredData = items.filter(item => item.category === button);
        setMenuItem(filteredData)
    }

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-md bg-white">
                <div className="blogGradient rounded-md">
                    <CenteredHeader
                        title="Contributors"
                        description="Our team speaks numerous languages and are distributed across multiple regions around the world" />
                    <div className="px-5 py-10 md:px-10 max-w-5xl block m-auto">
                        <h3 className="uppercase font-extrabold text-center py-5 text-3xl md:text-4xl pb-10 md:pt-10">
                            Core Team
                        </h3>
                        <Menu menuItem={menuItem} />
                    </div>
                    <div className="bg-lightgray">
                        <div className="px-5 py-10">
                            <h3 className="uppercase font-extrabold text-center py-5 text-3xl md:text-4xl pb-10 md:pt-10">
                                Advisors
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 block m-auto max-w-4xl">
                            <div className="md:pt-10 text-center py-10">
                                    <img className="block m-auto max-w-xs" src="../assets/renner.png" alt="Renan Feldman" />
                                    <strong><p className="credmark text-lg py-2.5">Renan Feldman</p></strong>
                                    <p className="credmark text-base pb-4">Security</p>
                                    <div className="flex justify-center">
                                        <a href="https://www.linkedin.com/in/renanfeldman/" target="_blank" rel="noreferrer">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="#7E5594" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>                                
                                <AdvisorCard
                                    img="../assets/jonah.png"
                                    alt="Jonah Lau"
                                    name="Jonah Lau"
                                    role="Product"
                                    company="Crypto.com"
                                    linkedin="https://www.linkedin.com/in/jonathanlauhk/"
                                    twitter="https://twitter.com/thejonahlau"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 block m-auto">

                                <AdvisorCard
                                    img="../assets/heiki.png"
                                    alt="Heikki Vanttinen"
                                    name="Heikki Vanttinen"
                                    role="Vision"
                                    company="API3"
                                    linkedin="https://www.linkedin.com/in/heikki-v%C3%A4nttinen-83a86380/"
                                    twitter="https://twitter.com/API3DAO"
                                />
                                <AdvisorCard
                                    img="../assets/alberto.png"
                                    alt="Alberto Ornaghi"
                                    name="Alberto Ornaghi"
                                    role="Engineering"
                                    company="Coinbase"
                                    linkedin="https://www.linkedin.com/in/albertoornaghi/"
                                    twitter="https://twitter.com/AlbertoOrnaghi"
                                />
                                <div className="md:pt-10 text-center py-10">
                                    <img className="block m-auto max-w-xs" src="../assets/serge.png" alt="Serge Ugarte" />
                                    <strong><p className="credmark text-lg py-2.5">Serge Ugarte</p></strong>
                                    <p className="credmark text-base pb-4">Strategy</p>
                                    <div className="flex justify-center">
                                        <a href="https://www.linkedin.com/in/serge-ugarte/" target="_blank" rel="noreferrer">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="#7E5594" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-10 md:pb-0">
                        <h4 className="credmark text-4xl text-center pt-10 md:pt-32 pb-9">Want to help us de-risk DeFi?</h4>
                        <div className="flex justify-center">
                            <Link href="/careers">
                                <button
                                    type="button"
                                    className="uppercase font-semibold inline-flex items-center md:mb-32 px-7 py-2 shadow-sm text-sm rounded-md text-white bg-credmarkpurple"
                                >
                                    Work with us
                                </button>
                            </Link>
                        </div>
                    </div>
                    <Subscribe />
                    <Footer />
                </div>
            </main>
        </>

    )
}