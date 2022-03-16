import CareerHeader from "../layout/centeredHeader"
import Culture from '../careers/culture'
import OpenRoles from "../careers/openRoles"
import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"


export default function Careers() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-md bg-white">
                <div className="blogGradient rounded-md">
                    <CareerHeader
                        title="Build the Future of DeFi With us"
                        description="Our mission is to de-risk DeFi and enable users to make better informed decisions."
                        descriptionTwo="Allowing everyone to evaluate risk will enable mainstream adoption of DeFi."
                        button="Join us"
                    />
                    <div className="px-5 py-10">
                        <h3 className="roboto uppercase font-extrabold text-center py-5 text-5xl md:text-4xl md:pt-10">
                            Our Culture
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 block m-auto pb-10">
                            <Culture
                                img="../assets/decentralized.svg"
                                alt="Decentralized Ideas"
                                title="Decentralized Ideas"
                                description="Everyone has their own expertise and unique experiences. Bring them to the table, back them up, own them!"
                            />
                            <div className="pb-10 max-w-xl block m-auto">
                                    <img
                                        alt="Global Team"
                                        src="../assets/global.svg"
                                        className='block mx-auto cursor-pointer px-5 pt-10'
                                    />
                                <p className="text-credmarkpurple px-5 credmark cursor-pointer text-center text-lg max-w-xs block m-auto">Global</p>
                                <p className="text-credmarkpurple px-5 cursor-pointer text-center text-base">Credmark is a DAO quickly moving towards full decentralization. We are building a global community to take over the DAO&apos;s governance.</p>
                            </div>
                            <Culture
                                img="../assets/turbo-learning.svg"
                                alt="Turbo-charged learning"
                                title="Turbo-charged learning"
                                description="DeFi moves lightning fast. So do we."
                            />
                        </div>
                        <div className="py-10 bg-pinkextralight">
                            <h3 className="roboto font-extrabold uppercase text-center py-5 text-5xl md:text-4xl pb-10 md:pt-10">
                                Open Roles
                            </h3>
                            <OpenRoles
                                jobtitle="Senior Backend Python Developer"
                                link="/careers/senior-python-developer"
                            />
                            <OpenRoles
                                jobtitle="Senior Backend Engineer"
                                link="/careers/senior-backend-engineer"
                            />
                            <OpenRoles
                                jobtitle="Senior Cloud Architect"
                                link="/careers/senior-cloud-architect"
                            />
                            <OpenRoles
                                jobtitle="Senior Frontend Engineer"
                                link="/careers/senior-frontend-engineer"
                            />
                            <OpenRoles
                                jobtitle="Senior Solidity Engineer"
                                link="/careers/senior-solidity-engineer"
                            />
                        </div>
                        <div className="px-5 py-10">
                            <h3 className="roboto uppercase font-extrabold text-center py-5 text-5xl md:text-4xl pb-10 md:pt-10">
                                Our mission
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 block m-auto">
                                <Culture
                                    img="../assets/curate-crypto-data.svg"
                                    alt="Heikki Vänttinen"
                                    title="Curate crypto data"
                                />
                                <Culture
                                    img="../assets/publish-research.svg"
                                    alt="Publish industry leading research"
                                    title="Publish industry leading research"

                                />
                                <Culture
                                    img="../assets/risk-management-tool.svg"
                                    alt="Develop risk management tools"
                                    title="Develop risk management tools"
                                />
                            </div>
                        </div>
                    </div>
                    <Subscribe />
                    <Footer />
                </div>
            </main>
        </>

    )
}