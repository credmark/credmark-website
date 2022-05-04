import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"
import Description from "../careers/descriptionPython"
import NavTest from "../layout/NavTest"


export default function SeniorPythonDeveloper() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none bg-white">
            <div className="header-bg">
                    <NavTest />                    
                    <Description
                        title="Senior Python Developer"
                        description="Our mission is to de-risk the DeFi industry to enable users to make better informed investment decisions."
                        summary="You’ve been developing software for 10+ years. You understand blockchain technologies. You learned Solidity because smart contracts matter. You quickly realized how crap Solidity and the EVM are but built tools and techniques to manage this crappiness. You stuck around because Ethereum is where the action is."
                        responsibilities="Assist with planning and architecting our platform, APIs, and SDKs."
                        responsibilitiesOne="Work with other core engineers to build, test, and document."
                        responsibilitiesTwo="Work with other members of the engineering team to deliver reliable product at scale."
                        skills="Has at least five years of modern Python development experience,"
                        skillsOne="is very familiar with JSON and modern APIs,"
                        skillsTwo="understands JavaScript/TypeScript at a relatively deep level,"
                        skillsThree="has worked remotely on an agile team,"
                        skillsFour="has worked with large amounts of data,"
                    />
                        <Subscribe />
                        <Footer />
                </div>
            </main>
        </>

    )
}