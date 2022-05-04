import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"
import Description from "../careers/description"
import Nav from "../layout/NavTest"


export default function SeniorBackendEngineer() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none bg-white">
                <div className="header-bg">
                    <Nav />
                    <Description
                        title="Senior Backend Engineer"
                        description="Our mission is to de-risk the DeFi industry to enable users to make better informed investment decisions."
                        experience="5+ Years"
                        location="Austin, TX (partial remote)"
                        job="Full-time"
                        summary="We need engineers who like to build from the ground up and deeply understand: Scaling, Security, Big data, API’s."
                        responsibilities="Assist with planning and architecting of our future developer platform"
                        responsibilitiesOne="Create simple and feature-rich API’s with your language of choice"
                        responsibilitiesTwo="Advise and assist with creation of scalable data ETL pipelines"
                        responsibilitiesThree="Update and create smart contracts using Solidity"
                        responsibilitiesFour="Utilizing AWS and other cloud services to create largely scalable solutions"
                        responsibilitiesFive="Advise and assist with creating framework for automated test coverage"
                        responsibilitiesSix="Following process for successful CI/CD"
                        responsibilitiesSeven="Document API’s and code for public consumption"
                        responsibilitiesEight="Code reviews for fellow engineers"
                        responsibilitiesNine="Research technologies and brainstorm useful features"
                        skills="5+ years of practical programming experience - Python or Javascript"
                        skillsOne="Experience with: Building microservices, Consuming and designing APIs, Building and managing scalable big data systems, Managing several types of databases and queuing systems, Automating in AWS or other cloud providers"
                        skillsTwo="Highly organized"
                        skillsThree="Collaborative but willing to learn on their own"
                        skillsFour="Worked in an agile team"
                        skillsFive="Experience in DeFi and Blockchain technologies"
                        skillsSix="Used Solidity to write smart contracts"
                        skillsSeven="An active contributor to at least one open source project"
                        skillsEight="Experienced with statistics and probability"
                        skillsNine="Familiar with cybersecurity best practices"
                        subject="Senior Backend Engineer Application"
                    />
                        <Subscribe />
                        <Footer />
                </div>
            </main>
        </>

    )
}