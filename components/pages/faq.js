import CenteredHeader from "../layout/faqHeader"
import Footer from "../layout/footer";
import Subscribe from "../subscribe/subscribe"
import QuestionsIntro from "../faq/questionsIntro";
import QuestionsTokenApi from "../faq/questionsTokenApi";
import QuestionsToken from "../faq/questionsToken";
import Nav from "../layout/nav";
import Link from "next/link";
import QuestionsPortfolio from "../faq/questionsPortfolioApi";
import QuestionsDeFi from "../faq/questionsDeFi";
import QuestionsCMF from "../faq/questionsCMF";
import QuestionsData from "../faq/questionsData";

export default function faq() {
    return (
        <>
            <div className="py-2 stickyCta text-center relative">
                <div>
                    <Link href="/product?tokenApi=true#learnMore" rel="noreferrer"><p className="cursor-pointer text-white text-base flex justify-center flex-wrap"><span className="float-left pr-3">
                        The only source of DeFi prices: our Token API. Simple. Powerful. Try it.</span><img className="hover:animate-pulse" src="../assets/arrow-white.svg" alt="Right arrow" /></p></Link>
                </div>
            </div>
            <div className="bg-credmarkpurple heroBg w-screen" ></div>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none header-bg">
                <Nav />
                <div>
                    <CenteredHeader
                        title="FAQ"
                    />
                </div>
                <div className="md:m-auto md:pb-20 pb-0 px-5">
                    <div className="max-w-5xl md:m-auto">
                        <div className="max-w-5xl md:m-auto">
                            <h3 className="roboto text-white font-bold text-left text-3xl pt-5">
                                Introduction
                            </h3>
                            <div className="mb-20">
                                <QuestionsIntro />
                            </div>
                        </div>
                        <h3 className="roboto text-white font-bold text-left text-3xl md:text-4xl">
                            CMK Token
                        </h3>
                        <div className="mb-20">
                            <QuestionsToken />
                        </div>
                    </div>
                    <div className="max-w-5xl md:m-auto">
                        <h3 className="roboto text-white font-bold text-left text-3xl md:text-4xl">
                            Token API
                        </h3>
                        <div className="mb-20">
                            <QuestionsTokenApi />
                        </div>
                    </div>
                    <div className="max-w-5xl md:m-auto">
                        <h3 className="roboto text-white font-bold text-left text-3xl md:text-4xl">
                            Portfolio API
                        </h3>
                        <div className="mb-20">
                            <QuestionsPortfolio />
                        </div>
                    </div>
                    <div className="max-w-5xl md:m-auto">
                        <h3 className="roboto text-white font-bold text-left text-3xl md:text-4xl">
                            DeFi API
                        </h3>
                        <div className="mb-20">
                            <QuestionsDeFi />
                        </div>
                    </div>
                    <div className="max-w-5xl md:m-auto">
                        <h3 className="roboto text-white font-bold text-left text-3xl md:text-4xl">
                            Credmark Model Framework (CMF)
                        </h3>
                        <div className="mb-20">
                            <QuestionsCMF />
                        </div>
                    </div>
                    <div className="max-w-5xl md:m-auto">
                        <h3 className="roboto text-white font-bold text-left text-3xl md:text-4xl">
                            Credmark Data
                        </h3>
                        <div className="mb-20">
                            <QuestionsData />
                        </div>
                    </div>
                </div>
                <Subscribe />
            </main>
            <Footer />
        </>
    )
}