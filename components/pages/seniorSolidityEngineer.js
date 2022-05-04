import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"
import Description from "../careers/descriptionSolidity"


export default function SeniorSolidityEngineer() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none bg-white">
                <div className="blogGradient rounded-md">
                    <Description
                        title="Senior Solidity Engineer"
                        description="Our mission is to de-risk the DeFi industry to enable users to make better informed investment decisions."
                        experience="10+ Years"
                        location="Anywhere"
                        job="Full-time"
                        summary="You’ve been developing software for 10+ years. You understand blockchain technologies. You learned Solidity because smart contracts matter. You quickly realized how crap Solidity and the EVM are but built tools and techniques to manage this crappiness. You stuck around because Ethereum is where the action is."
                        responsibilities="You’ll be developing smart contracts for the Credmark platform."
                        responsibilitiesOne="Building tools to facilitate the development of smart contracts"
                        responsibilitiesTwo="Building tools to facilitate the maintanance of smart contracts"
                        responsibilitiesThree="Building tools to facilitate the operationalization of smart contracts"
                        responsibilitiesFour="Collaborating with our DevOps, back-end, and front-end teams."
                        responsibilitiesFive="Keeping up to date with other chains"
                        responsibilitiesSix="Supporting the team as it evaluates those options going forward."
                        skills="Has done serious work in Solidity"
                        skillsOne="Has history with IPFS"
                        skillsTwo="Can talk about the pros and cons of Solidity and the EVM"
                        skillsThree="HHas written assembly language"
                    />
                        <Subscribe />
                        <Footer />
                </div>
            </main>
        </>

    )
}