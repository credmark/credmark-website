import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"
import Description from "../careers/descriptionWriter"


export default function TechnicalWriter() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-md bg-white">
                <div className="blogGradient rounded-md">
                    <Description
                        title="Technical Writer"
                        description="Our mission is to de-risk the DeFi industry to enable users to make better informed investment decisions."
                        experience="2+ Years"
                        location="Anywhere"
                        job="Freelance"
                        summary="We are a highly technical project focused on building tools for financial modeling in the DeFi (crypto) space."
                        summaryOne="We have some documentation. We have an outline of what we want. We have people internally very willing to help us reach our desired outcome, but we need a pro to lead the effort. We need this person to be obsessed with quality."
                        summaryTwo="We have two audiences: (1) financial modelers who use our modeling framework, and (2) developers who use our API. Both need great documentation."
                        skills="Technical writing"
                        skillsOne="Attention to detail"
                        skillsTwo="Technical documentation"
                        skillsThree="Educational material"
                    />
                        <Subscribe />
                        <Footer />
                </div>
            </main>
        </>

    )
}