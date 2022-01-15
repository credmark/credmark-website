import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"
import Description from "../careers/descriptionBusiness"


export default function BusinessIntelligenceManager() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-md bg-white">
                <div className="blogGradient rounded-md">
                    <Description
                        title="Business Intelligence Senior Manager"
                        description="Our mission is to de-risk the DeFi industry to enable users to make better informed investment decisions."
                        experience="10+ Years"
                        location="Anywhere"
                        job="Full-time"
                        summary="Credmark is a data and analytics platform in the decentralized finance (DeFi) space."
                        summaryTwo="We are looking for a Business Intelligence Manager to refine and lead the data strategy implementation. The data consumers are internal users and external clients."
                        summaryThree="Position responsibility is to define the data warehouse architecture, including mappings, data controls, analysis, and visualization. This includes setting up governance and technical procedures. The core function is to support having high quality daily and intraday data across all dimensions to make risk management and trading decisions."
                        summaryFour="In this role as Business Intelligence Manager you will act as a conduit between modellers, engineers, and clients."
                        summaryFive="This role is in a fast-paced start-up environment. You will need to have a deep understanding of trading strategies and DeFi from a data perspective."
                        summarySix="This is more than just a managerial role, it’s a versatile and visionary position where you can create and lead."
                        responsibilities="Experience in BI Solutions 7-10 years"
                        responsibilitiesOne="Experience in financial services"
                        responsibilitiesTwo="Strong knowledge of DeFi"
                        responsibilitiesThree="Knowledge of data quality controls best practice"
                        responsibilitiesFour="Advanced SQL"
                        responsibilitiesFive="Advanced Python and Java"
                        responsibilitiesSix="Data Visualization Techniques"
                        responsibilitiesSeven="Experience communicating at managerial level and with external clients"
                        responsibilitiesEight="Project Management Experience"
                    />
                        <Subscribe />
                        <Footer />
                </div>
            </main>
        </>

    )
}