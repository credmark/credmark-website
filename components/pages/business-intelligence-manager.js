import Subscribe from "../subscribe/subscribe"
import Footer from "../layout/footer"
import Description from "../careers/descriptionBusiness"


export default function BusinessIntelligenceManager() {

    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-md bg-white">
                <div className="blogGradient rounded-md">
                    <Description
                        title="Business Intelligence Manager"
                        description="Our mission is to de-risk the DeFi industry to enable users to make better informed investment decisions."
                        experience="10+ Years"
                        location="Anywhere"
                        job="Full-time"
                        summary="We are looking for a Business Intelligence Manager, Risk Solutions to refine and lead the data strategy implementation. The data consumers are internal users and external clients. Position responsibility is to define the data warehouse architecture, including mappings, data controls, analysis, and visualization. This includes setting up governance and technical procedures. The core function is to support having high-quality daily and intraday data across all dimensions to make risk management and trading decisions."
                        summaryTwo="In this role as Business Intelligence Manager, Risk Solutions you will act as a conduit between the business and technical team in terms of data. You will take ownership over the data projects, including developing the BI platform, incorporating Agile BI vision, and planning future architecture for user cases specific requirements."
                        summaryThree="This role is in a fast-paced start-up environment. You will need to develop an understanding of decentralized finance and encourage a data-driven approach. This is more than just a managerial role, it’s a versatile and visionary position where you can create and lead."
                        responsibilities="Experience developing BI solutions in trading"
                        responsibilitiesOne="Knowledge of data quality controls standards"
                        responsibilitiesTwo="SQL"
                        responsibilitiesThree="Python or Java"
                        responsibilitiesFour="Data Visualization Techniques"
                        responsibilitiesFive="Experience communicating at the managerial level and with external clients"
                        responsibilitiesSix="Project Management Experience"
                        responsibilitiesSeven="Knowledge of the Financial Services, Capital Markets and Electronic Trading"
                    />
                        <Subscribe />
                        <Footer />
                </div>
            </main>
        </>

    )
}