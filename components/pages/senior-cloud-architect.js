import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"
import Description from "../careers/description"
import Nav from "../layout/NavTest"


export default function SeniorCloudArchitect() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none bg-white">
                <div className="header-bg">
                    <Nav />
                    <Description
                        title="Senior Cloud Architect"
                        description="Our mission is to de-risk the DeFi industry to enable users to make better informed investment decisions."
                        experience="5+ Years"
                        location="Austin, TX (partial remote)"
                        job="Full-time"
                        summary="You write software. You’ve been doing it for a long time. You’ve designed large systems, some of them might have been called platforms. You’ve incurred technical debt. You’ve fixed things just in time. You’ve suffered.

                        You’re still hands-on – definitely not ivory tower! – but know enough to help our CTO evaluate and make complicated design choices. This is a full-time job. Software changes fast.
                        
                        Our CTO is focused on delivery for the business. She doesn’t have time to consider every tradeoff. Her focus is more short-term than yours will have to be, but she can’t make smart short-term decisions without knowing what might come next.
                        "
                        responsibilities="Create and maintain data ETL pipelines"
                        responsibilitiesOne="Create and maintain data lake schemas"
                        responsibilitiesTwo="Create and maintain API features for users to access data"
                        responsibilitiesThree="Overall system design"
                        responsibilitiesFour="Technology evaluations and recommendations"
                        responsibilitiesFive="Documentation"
                        responsibilitiesSix="Guidance for the engineering teams"
                        responsibilitiesSeven="You’re still hands-on – definitely not ivory tower!"
                        responsibilitiesEight="Knows how to work with models"
                        responsibilitiesNine="Knows how to work with blockchains"
                        skills="Has written a lot of software"
                        skillsOne="Has designed complex systems in cloud environments"
                        skillsTwo="Has handled large data pipelines and efficient data stores"
                        skillsThree="Can describe several epic failures"
                        skillsFour="Understands databases"
                        skillsFive="Understands queuing system"
                        skillsSix="Understands caching"
                        skillsSeven="Understands blockchain technologies"
                        skillsEight="Has worked with model builders"
                        skillsNine="Understands how to operationalize their work"
                    />
                        <Subscribe />
                        <Footer />
                </div>
            </main>
        </>

    )
}