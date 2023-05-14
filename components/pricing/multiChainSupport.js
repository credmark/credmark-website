const statuses = { Completed: true, Coming: false }
const activityItems = [
    {
        user: {
            name: 'Ethereum',
            imageUrl:
                '../assets/ethereum-logo.svg',
        },
        tokenApiStatus: 'Completed',
        portfolioApiStatus: 'Coming soon',
        defiApiStatus: 'Completed',
        rawDataStatus: 'Completed',
    },
    {
        user: {
            name: 'Polygon',
            imageUrl:
                '../assets/polygon-table-logo.svg',
        },
        tokenApiStatus: 'Completed',
        portfolioApiStatus: 'Coming soon',
        defiApiStatus: 'Completed',
        rawDataStatus: 'Coming soon',
    },
    {
        user: {
            name: 'BNB Smart Chain',
            imageUrl:
                '../assets/bnb-table-logo.svg',
        },
        tokenApiStatus: 'Completed',
        portfolioApiStatus: 'Coming soon',
        defiApiStatus: 'Completed',
        rawDataStatus: 'Coming soon',
    },
    {
        user: {
            name: 'Avalanche',
            imageUrl:
                '../assets/avalanche-table-logo.svg',
        },
        tokenApiStatus: 'Completed',
        portfolioApiStatus: 'Coming soon',
        defiApiStatus: 'Completed',
        rawDataStatus: 'Coming soon',
    },
    {
        user: {
            name: 'Arbitrum',
            imageUrl:
                '../assets/arbitrum-table-logo.svg',
        },
        tokenApiStatus: 'Completed',
        portfolioApiStatus: 'Coming soon',
        defiApiStatus: 'Completed',
        rawDataStatus: 'Coming soon',
    },
    {
        user: {
            name: 'Optimism',
            imageUrl:
                '../assets/optimism-table-logo.svg',
        },
        tokenApiStatus: 'Completed',
        portfolioApiStatus: 'Coming soon',
        defiApiStatus: 'Completed',
        rawDataStatus: 'Coming soon',
    },
    {
        user: {
            name: 'Fantom',
            imageUrl:
                '../assets/fantom-table-logo.svg',
        },
        tokenApiStatus: 'Completed',
        portfolioApiStatus: 'Coming soon',
        defiApiStatus: 'Completed',
        rawDataStatus: 'Coming soon',
    },
]

export default function multiChainSupport() {
    return (
        <div className="py-10">
            <h3 className="px-4 text-3xl font-semibold leading-7 text-white sm:px-6 lg:px-8 text-center pt-10">Multi-chain is the future</h3>
            <p className="text-center text-white py-5">A single endpoint connecting anyone to DeFi</p>
            <div className="overflow-x-auto">
                <div>
                    <table className="mt-6 w-full whitespace-nowrap text-left">
                        <thead className="border-b border-white/10 text-sm leading-6 text-white">
                            <tr className="borderTop">
                                <th scope="col" className="py-2 pl-4 pr-8 font-semibold sm:pl-6 lg:pl-8">

                                </th>
                                <th scope="col" className="borderLeft text-base py-4 px-8 font-semibold sm:table-cell">
                                    Token API
                                </th>
                                <th scope="col" className="borderLeft text-base py-4 px-8 text-right font-semibold sm:pr-8 sm:text-left lg:pr-20">
                                    Portfolio API
                                </th>
                                <th scope="col" className="borderLeft text-base py-4 py-2 px-8 font-semibold md:table-cell lg:pr-20">
                                    DeFi API
                                </th>
                                <th scope="col" className="borderLeft text-base py-4 px-8 font-semibold md:table-cell lg:pr-20">
                                    Raw Data
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white">
                            {activityItems.map((item) => (
                                <tr key={item.user.imageUrl}>
                                    <td className=" py-4 pl-4 pr-8 sm:pl-6 lg:pl-8">
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.user.imageUrl} alt="" className="h-8 w-8" />
                                            <div className="truncate text-sm font-medium leading-6 text-white">{item.user.name}</div>
                                        </div>
                                    </td>
                                    <td className="borderLeft py-4 px-8 table-cell sm:pr-8">
                                        <div className="flex gap-x-3">
                                            <div className="text-white text-sm">
                                                {statuses[item.tokenApiStatus] ? <img src="../assets/green-tick-no-bg.svg" alt="Curate crypto data" />
                                                    : 'Coming soon'}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="borderLeft py-4 px-8 table-cell sm:pr-8">
                                        <div className="flex gap-x-3">
                                            <div className="text-white text-sm">
                                                {statuses[item.portfolioApiStatus] ? <img src="../assets/green-tick-no-bg.svg" alt="Curate crypto data" />
                                                    : 'Coming soon'}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="borderLeft py-4 px-8 table-cell sm:pr-8">
                                        <div className="flex gap-x-3">
                                            <div className="text-white text-sm">
                                                {statuses[item.defiApiStatus] ? <img src="../assets/green-tick-no-bg.svg" alt="Curate crypto data" />
                                                    : 'Coming soon'}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="borderLeft py-4 px-8 table-cell sm:pr-8">
                                        <div className="flex gap-x-3">
                                            <div className="text-white text-sm">
                                                {statuses[item.rawDataStatus] ? <img src="../assets/green-tick-no-bg.svg" alt="Curate crypto data" />
                                                    : 'Coming soon'}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
