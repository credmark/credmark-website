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
                        title="Build the Future of Finance Together"
                        description="Our mission is to give developers easy access to blockchain data."
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
                </div>
                <Footer />
            </main>
        </>

    )
}
