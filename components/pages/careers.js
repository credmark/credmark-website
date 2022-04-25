import CareerHeader from "../layout/careerHeader"
import Culture from '../careers/culture'
import OpenRoles from "../careers/openRoles"
import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"
import CareerTilesLive from "../careers/careerTilesLive"


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

                    <div className="py-10 max-w-4xl mx-auto block">
                        <h3 className="px-4 md:px-0 text-left text-black py-5 text-3xl text-4xl md:text-5xl pb-10">
                            Open Roles
                        </h3>
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
                        <OpenRoles
                            jobtitle="Senior Frontend Engineer"
                            link="/careers/senior-frontend-engineer"
                            role="Engineering"
                            location="Anywhere"
                            time="Full-Time"
                        />
                        <OpenRoles
                            jobtitle="Senior Solidity Engineer"
                            link="/careers/senior-solidity-engineer"
                            role="Engineering"
                            location="Anywhere"
                            time="Full-Time"
                        />
                    </div>
                    <div className="footerBg">
                        <div className="px-5 py-10 max-w-6xl block m-auto">
                            <h3 className="text-left text-white py-5 text-3xl text-4xl md:text-5xl pb-10">
                                Our mission
                            </h3>
                            <div className="flex">
                                <Culture />
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