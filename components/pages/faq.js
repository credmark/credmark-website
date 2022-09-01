import CenteredHeader from "../layout/faqHeader"
import Footer from "../layout/footer";
import Subscribe from "../subscribe/subscribe"
import QuestionsIntro from "../faq/questionsIntro";
import QuestionsPlatform from "../faq/questionsPlatform";
import QuestionsToken from "../faq/questionsToken";
import Nav from "../layout/nav";


export default function faq() {
    return (
        <>
            <div className="py-2 stickyCta text-center relative">
                <div>
                    <a href="https://www.snowflake.com/datasets/credmark-labs-ethereum-core/" target="_blank" rel="noreferrer"><p className="text-white text-base flex justify-center flex-wrap"><span className="float-left pr-3">We have made an always-up-to-date indexed copy of the Ethereum blockchain freely available on the Snowflake Marketplace.</span><img className="hover:animate-pulse" src="../assets/arrow-white.svg" alt="Right arrow" /></p></a>
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
                            <QuestionsIntro />
                            <div className="mb-20">
                                <a href="https://docs.credmark.com/credmark-faq/" target="_blank" rel="noreferrer">
                                    <button
                                        type="button"
                                        className="mt-5 inline-flex items-center px-8 py-3 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                                    >
                                        <p className="flex text-credmarkpurple text-sm py-0 leading-4">Learn More<img width={16} className="float-right ml-1" alt="arrow right" src="../assets/arrow_purple.svg" /></p>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <h3 className="roboto text-white font-bold text-left text-3xl md:text-4xl">
                            Token
                        </h3>
                        <QuestionsToken />
                        <div className="mb-20">
                            <a href="https://docs.credmark.com/credmark-faq/" target="_blank" rel="noreferrer">
                                <button
                                    type="button"
                                    className="mt-5 inline-flex items-center px-8 py-3 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                                >
                                    <p className="flex text-credmarkpurple text-sm py-0 leading-4">Learn More<img width={16} className="float-right ml-1" alt="arrow right" src="../assets/arrow_purple.svg" /></p>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="max-w-5xl md:m-auto">
                        <h3 className="roboto text-white font-bold text-left text-3xl md:text-4xl">
                            Platform
                        </h3>
                        <QuestionsPlatform />
                        <div className="mb-20">
                            <a href="https://docs.credmark.com/credmark-faq/" target="_blank" rel="noreferrer">
                                <button
                                    type="button"
                                    className="mt-5 inline-flex items-center px-8 py-3 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                                >
                                    <p className="flex text-credmarkpurple text-sm py-0 leading-4">Learn More<img width={16} className="float-right ml-1" alt="arrow right" src="../assets/arrow_purple.svg" /></p>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <Subscribe />
            </main>
            <Footer />
        </>
    )
}