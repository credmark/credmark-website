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
                        <div className="grid grid-cols-1 md:grid-cols-3 pb-10 gap-12 px-10">
                            <Menu
                                category='Team'
                                img="../assets/neil-resized.png"
                                alt="Neil Zumwalde"
                                name="Neil Zumwalde"
                                title="Vision & Product"
                                description="An Electrical/Software Engineer, Neil has developed products and provided technical advisement in blockchain, industrial automation, and renewable energy markets. To Neil, nothing is impossible."
                                descriptiontwo="In his spare time he writes music for children and podcasts."
                                twitter="https://twitter.com/neilzum"
                                linkedin="https://www.linkedin.com/in/neilzumwalde/"
                            />
                            <Menu
                                category='Team'
                                img="../assets/momin.jpg"
                                alt="Momin Ahmad "
                                name="Momin Ahmad"
                                title="Marketing"
                                description="Momin is Credmark’s secret weapon. He is versatile, a quick study, and usually in a good mood after 10AM. Besides being responsible for the development of Credmark’s projects, Momin is the author of our Crypto Credit Report."
                                descriptiontwo="Outside of work, he enjoys playing bluegrass on his upright bass."
                                twitter="https://twitter.com/mostarz93"
                                linkedin="https://www.linkedin.com/in/momin-ahmad/"
                            />
                            <Menu
                                category='Team'
                                img="../assets/paul.png"
                                alt="Paul Murphy"
                                name="Paul Murphy"
                                title="Operations"
                                description="Born in Argentina, Paul has lived and worked all over the world. He used to write a lot of code. Now he’s kind of rusty. He does whatever needs doing, whether or not it’s fun."
                                descriptiontwo="He believes the answer to most questions can be found in musical and opera scores."
                                twitter="https://twitter.com/prmurphy"
                                linkedin="https://www.linkedin.com/in/prmurphy/"
                            />
                            <Menu
                                category='Team'
                                img="../assets/matt.png"
                                alt="Matthias Knauth"
                                name="Matthias Knauth"
                                title="Product"
                                twitter="https://twitter.com/MatthiasKnauth"
                                linkedin="https://www.linkedin.com/in/matthias-knauth-b96b6b37/"
                            />
                            <Menu
                                category='Team'
                                img="../assets/Asan.png"
                                alt="Asan Tulemis"
                                name="Asan Tulemis"
                                title="Risk"
                                description="Asan has worked in the risk departments of two of Australia’s largest banks. He has a PhD in applied math. He loves risk strategy and building the most complicated risk models."
                                twitter="https://twitter.com/atulemis1"
                                linkedin="https://www.linkedin.com/in/atulemis/"
                            />
                            <Menu
                                category='Team'
                                img="../assets/nisch.jpg"
                                alt="Nishchal Gaba"
                                name="Nishchal Gaba"
                                title="Data Science"
                                description="Nish eats data instead of food. Armed with a Master’s in AI from Edinburgh University, he has become one of India’s greatest technologists."
                                descriptiontwo="Outside of work he writes and reviews academic papers. For fun."
                                twitter="https://twitter.com/gaba_nishchal"
                                linkedin="https://www.linkedin.com/in/nishchal-gaba-295701a5/"
                            />
                            <Menu
                                category='Team'
                                img="../assets/collier.jpg"
                                alt="Collier Gray"
                                name="Collier Gray"
                                title="Operations"
                                description="A native Austinite, Collier spent 6 years in technology and finance in NYC, working from Product to leading a Lean Governance group."
                                descriptiontwo="When he's not working through his substantial to-do list, you can find Collier reading and trying to keep his vegetable garden alive."
                                twitter="https://twitter.com/JoeCollierGray"
                                linkedin="https://www.linkedin.com/in/joseph-collier-gray-7a323054/"
                            />
                            <Menu
                                category='Team'
                                img="../assets/stijn.jpg"
                                alt="Stijn Dobbelaere"
                                name="Stijn Dobbelaere"
                                title="Design"
                                description="From editing national ad campaigns for Capital One, to creating viral-ready memes for Southwest Airlines, to voicing Pizza Hut commercials, Stijn has  years of experience in design, advertising and marketing."
                                descriptiontwo="Outside of his work, he bangs loudly on drums."
                                twitter="https://twitter.com/S7IJN"
                                linkedin="https://www.linkedin.com/in/stijn-dobbelaere-5b9a476b/"
                            />
                            <Menu
                                category='Team'
                                img="../assets/when.png"
                                alt="Wen-Chiao"
                                name="Wen-Chiao"
                                title="Community"
                                description="Originally from Taiwan,  Wen-Chiao grew up in the US, went back to Taiwan for high school, and then moved to Japan for university. He’s worked in both Taipei and Tokyo in tech and innovation. In his spare time, he likes reading and asking questions."
                                twitter="https://twitter.com/wc_su95"
                                linkedin="https://www.linkedin.com/in/wen-chiao-su/"
                            />
                            <Menu
                                category='Team'
                                img="../assets/joey.jpg"
                                alt="Joseph Hirsh"
                                name="Joseph Hirsh"
                                title="Data"
                                description="After receiving a PhD in algebraic topology and postdoctoral fellowships at MIT and MSRI, Joe worked in blockchain/AI consulting and served as a mentor for dLab."
                                descriptiontwo="Outside of work, Joe is either cooking, bodybuilding, or watching YouTube videos about non-duality."
                                twitter="https://twitter.com/corepresentable"
                                linkedin="https://www.linkedin.com/in/joseph-hirsh/"
                            />
                            <div className="box col-xs">
                                <div id="team" className="py-10">
                                    <div>
                                        <div className="rounded-full img-hover">
                                            <img className="text-center bio-photo" src="../assets/peter-satoshi.jpeg" alt="Peter Credmark" />
                                            <div className="overlay relative">
                                                <div className="socialButtons flex justify-center">
                                                    <a href="https://twitter.com/0xPeterSatoshi" target="_blank" rel="noreferrer">
                                                        <svg className="cursor-pointer" width={25} fill="#ffff" viewBox="0 0 24 24">
                                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="credmark py-1.5 text-center text-lg">0xPeterSatoshi</p>
                                            <p className="credmark pb-5 text-center text-base">Data</p>
                                            <div className="flex justify-center">
                                                <a href="https://twitter.com/0xPeterSatoshi" target="_blank" rel="noreferrer">
                                                    <svg className="twitter" width={25} fill="#7E5594" viewBox="0 0 24 24">
                                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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