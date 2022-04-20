import CareerHeader from "../layout/careerHeader"
import Culture from '../careers/culture'
import OpenRoles from "../careers/openRoles"
import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"
import CareerTilesLive from "../careers/careerTilesLive"
import CareerTiles from "../careers/careerTiles"


export default function Careers() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none">
                <div className="blogGradient rounded-md">
                    <CareerHeader
                        title="Build the Future of DeFi With us"
                        description="Our mission is to de-risk the  DeFi industry to enable users to make better informed investment decisions."
                        descriptionTwo="We believe the key to mainstream adoption lies in reducing risk for users"
                        button="Join us"
                    />
                        <CareerTilesLive />

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
            </main>
        </>

    )
}