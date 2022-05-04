import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"
import Description from "../careers/descriptionFrameworkOwner"
import NavTest from "../layout/NavTest"


export default function SeniorPythonDeveloperFrameworkOwner() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none">
                <div className="header-bg">
                    <NavTest />
                    <div className="bg-white">
                        <Description
                            title="Senior Python Developer - Framework Owner"
                            description="Our mission is to de-risk the DeFi industry to enable users to make better informed investment decisions."
                            experience="5+ Years"
                            location="Anywhere"
                            job="Full-time"
                            summary="We need engineers who like to build from the ground up and deeply understand: Scaling, Security, Big data, API’s."
                            summaryTwo="This position will have overall responsibility for Credmark's Model Framework (CMF)."
                            list="https://github.com/credmark/credmark-models-py"
                            listTwo="https://github.com/credmark/credmark-model-framework-py"
                            url="https://github.com/credmark/credmark-models-py"
                            urlTwo="https://github.com/credmark/credmark-model-framework-py"
                            responsibilities="Assist with ongoing planning and architecting of the CMF. This will require understanding the needs of the platform's users, financial modelers."
                            responsibilitiesOne="Create simple and feature-rich API’s with Typescript (and other languages)."
                            responsibilitiesTwo="Develop client-side SDKs."
                            responsibilitiesThree="Assist with ongoing planning and architecting of the CMF. This will require understanding the needs of the platform's users, financial modelers."
                            responsibilitiesFour="Manage the Framework's CI/CD pipeline."
                            responsibilitiesFive="Use AWS and other cloud services to create largely scalable solutions."
                            responsibilitiesSix="Document API’s and code for public consumption."
                            responsibilitiesSeven="Code reviews for fellow engineers."
                            responsibilitiesEight="Research technologies and brainstorm useful features."
                            candidate="5+ years of practical programming experience - Python and Javascript"
                            candidateOne="Microservices"
                            candidateTwo="Middleware"
                            candidateThree="Consuming and designing APIs"
                            candidateFour="Building and managing scalable big data systems"
                            candidateFive="JSON"
                            candidateSix="SQL"
                            candidateSeven="Automated documentation systems (e.g., Sphinx)"
                            candidateEight="AWS or other cloud providers"
                            candidateNine="Highly organized"
                            candidateTen="Collaborative but willing to learn on their own"
                            candidateEleven="Worked in an agile team"
                            candidateTwelve="Experience in DeFi and Blockchain technologies"
                            candidateThirteen="An active contributor to at least one open source project"
                            candidateFourteen="Familiar with cybersecurity best practices"
                        />
                        <Subscribe />
                        <Footer />
                    </div>
                </div>
            </main>
        </>

    )
}
