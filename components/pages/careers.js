import CareerHeader from "../layout/careerHeader"
import OpenRoles from "../careers/openRoles"
import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"
import CareerTilesLive from "../careers/careerTilesLive"


export default function Careers() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none">
                <div className="blogGradient">
                    <CareerHeader
                        title="Build the Future of DeFi With us"
                        description="Our mission is to de-risk the  DeFi industry to enable users to make better informed investment decisions."
                        descriptionTwo="We believe the key to mainstream adoption lies in reducing risk for users"
                        button="Join us"
                    />
                    <CareerTilesLive />

                    <div className="px-5 py-20 md:py-28 max-w-4xl mx-auto block">
                        <h3 className="px-4 md:px-0 text-left text-black py-5 text-3xl text-4xl md:text-5xl pb-10">
                            Open Roles
                        </h3>
                        <OpenRoles
                            jobtitle="Senior Python Developer - Framework Owner"
                            link="/careers/senior-python-developer-framework-owner"
                            role="Engineering"
                            location="Anywhere"
                            time="Full-Time"
                        />
                        <OpenRoles
                            jobtitle="Senior Backend Python Developer"
                            link="/careers/senior-python-developer"
                            role="Engineering"
                            location="Anywhere"
                            time="Full-Time"
                        />
                        <OpenRoles
                            jobtitle="Senior Backend Engineer"
                            link="/careers/senior-backend-engineer"
                            role="Engineering"
                            location="Anywhere"
                            time="Full-Time"
                        />
                        <OpenRoles
                            jobtitle="Senior Cloud Architect"
                            link="/careers/senior-cloud-architect"
                            role="Engineering"
                            location="Anywhere"
                            time="Full-Time"
                        />
                    </div>
                    <div className="footerBg">
                        <div className="px-5 py-20 md:py-28 max-w-6xl block m-auto">
                            <h3 className="text-left text-white py-5 text-3xl text-4xl md:text-5xl pb-0">
                                Our mission
                            </h3>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div
                                    className="relative rounded-lg border border-gray-300 px-6 py-5 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <div className="flex-shrink-0">
                                        <img src="../assets/curate-crypto-data.svg" alt="Curate crypto data" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        <p className="text-2xl font-light text-white ml-2">Curate crypto data</p>
                                    </div>
                                </div>
                                <div
                                    className="relative rounded-lg border border-gray-300 px-6 py-5 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <div className="flex-shrink-0">
                                        <img src="../assets/research.svg" alt="Publish industry leading research" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        <p className="text-2xl font-light text-white ml-2">Publish industry leading research</p>
                                    </div>
                                </div>
                                <div
                                    className="relative rounded-lg border border-gray-300 px-6 py-5 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <div className="flex-shrink-0">
                                        <img src="../assets/risk-management.svg" alt="Develop risk management tools" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        <p className="text-2xl font-light text-white ml-2">Develop risk management tools</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe />
                <Footer />
            </main>
        </>

    )
}