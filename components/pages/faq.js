import CenteredHeader from "../layout/faqHeader"
import Footer from "../layout/footer";
import Subscribe from "../subscribe/subscribe"
import QuestionsIntro from "../faq/questionsIntro";
import QuestionsPlatform from "../faq/questionsPlatform";
import QuestionsToken from "../faq/questionsToken";
import NavTest from "../layout/NavTest";


export default function faq() {
    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none header-bg">
                <NavTest />
                <div>
                    <CenteredHeader
                        title="FAQ"
                    />
                </div>
                <div className="md:m-auto pb-10 px-5 md:px-0">
                    <div className="max-w-5xl md:m-auto">
                        <div className="max-w-5xl md:m-auto">
                            <h3 className="roboto text-white font-extrabold text-left text-3xl pt-10">
                                Introduction
                            </h3>
                            <QuestionsIntro />
                            <div className="mb-12">
                                <a href="https://docs.credmark.com/credmark-faq/" target="_blank" rel="noreferrer">
                                    <button
                                        type="button"
                                        className="mt-5 inline-flex items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                                    >
                                        <p className="flex text-credmarkpurple">Learn More<img width={30} className="float-right pl-3" alt="arrow right" src="../assets/arrow.svg" /></p>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <h3 className="roboto text-white font-extrabold text-left text-3xl md:text-4xl pt-10">
                            Token
                        </h3>
                        <QuestionsToken />
                        <div className="mb-12">
                            <a href="https://docs.credmark.com/credmark-faq/" target="_blank" rel="noreferrer">
                                <button
                                    type="button"
                                    className="mt-5 inline-flex items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                                >
                                    <p className="flex text-credmarkpurple">Learn More<img width={30} className="float-right pl-3" alt="arrow right" src="../assets/arrow.svg" /></p>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="max-w-5xl md:m-auto">
                        <h3 className="roboto text-white font-extrabold text-left text-3xl md:text-4xl pt-12">
                            Platform
                        </h3>
                        <QuestionsPlatform />
                        <div className="mb-12">
                            <a href="https://docs.credmark.com/credmark-faq/" target="_blank" rel="noreferrer">
                                <button
                                    type="button"
                                    className="mt-5 inline-flex items-center px-8 py-2 shadow-sm text-sm font-medium rounded-md text-credmarkpurple bg-green"
                                >
                                    <p className="flex text-credmarkpurple">Learn More<img width={30} className="float-right pl-3" alt="arrow right" src="../assets/arrow.svg" /></p>
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