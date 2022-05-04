import Header from "../layout/header"
import Footer from "../layout/footer"
import Subscribe from "../subscribe/subscribe"
import { useState } from 'react'
import ReportsMenu from '../filters/reportsMenu'
import ReportsButton from '../filters/reportsButton'
import items from "../../styles/reportsData"

const allCategories = ['All', ...items.map(item => item.category)];


export default function Reports() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState([allCategories]);

    const filter = (button) => {

        if (button === 'All') {
            setMenuItem(items);
            return;
        }

        const filteredData = items.filter(item => item.category === button);
        setMenuItem(filteredData)
    }


    return (
        <>
            <main className="max-w-full flex-1 relative overflow-y-auto focus:outline-none rounded-md advisorBg">
                <div className="blogGradient rounded-md">
                    <Header
                        title="Reports"
                        description="Check out the latest and historical reports regarding risk in the DeFi industry" />
                         <ReportsButton button={buttons} filter={filter} /> 
                    <div className="px-5 md:px-0 py-10 pb-20 md:pb-40 max-w-5xl block m-auto">
                        <ReportsMenu menuItem={menuItem} />
                    </div>
                    <Subscribe />
                    <Footer />
                </div>
            </main>
        </>

    )
}