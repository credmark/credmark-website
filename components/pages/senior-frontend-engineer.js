import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"
import Description from "../careers/descriptionFrontend"


export default function SeniorFrontendEngineer() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none bg-white">
                <div className="blogGradient rounded-md">
                    <Description
                        title="Senior Frontend Engineer"
                        description="Our mission is to de-risk the DeFi industry to enable users to make better informed investment decisions."
                        experience="10+ Years"
                        location="Austin, TX (partial remote)"
                        job="Full-time"
                        summary="You’ve been doing front-end development for 10+ years. You’ve seen a bunch of frameworks come and go. You aren’t fanatical about any of them but will happily discuss the pros and cons of each.
                        You’re obsessive about details to the point that you’ve been told you should seek help. You pay attention to every pixel delivered by a designer and make sure that the implementation conforms to that design across browsers and devices.                        
                        "
                        summaryTwo="We’re looking for engineers who want to work on stuff that matters. We think that providing an alternative to our current classist financial system matters.

                        We don’t have any specific educational or technology requirements. We believe that a good engineer with experience can learn whatever she needs to learn to get the job done. If you think credentials matter, please don’t send us your resume."
                        skills="Has at least 10 years of practical experience."
                        skillsOne="Can explain why user experience matters more than anything else."
                        skillsTwo="Consumes APIs for breakfast."
                        skillsThree="Isn’t married to a framework but understands a few well enough to fool a US immigration officer."
                        skillsFour="Acknowledges the existence of Mac OS, Windows, and Linux."
                        skillsFive="Uses many browsers."
                        skillsSix="Still suffers PTSD flashbacks when IE 6 comes up in conversation."
                        skillsSeven="Is highly organized."
                        skillsEight="Is collaborative but willing to learn on his or her own."
                        skillsNine="Is an active contributor to at least one open source project (optional)"
                    />
                        <Subscribe />
                        <Footer />
                </div>
            </main>
        </>

    )
}