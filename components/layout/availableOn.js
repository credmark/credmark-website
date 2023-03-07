export default function AvailableOn() {
    return (
        <>
            <div className="px-4 lg:px-0 bg-black py-20">
                <h1 className="tracking-tight font-bold gradientFont text-center pb-5 lg:pb-10">Available On</h1>
                <div className="grid grid-cols-1 lg:flex flex-wrap justify-between max-w-7xl mx-auto">
                    <div>
                        <img className="block mx-auto h-24" src="/assets/etheruem.svg" alt="etheruem logo" />
                        <p className="text-green text-center bungee">Ethereum</p>
                    </div>
                    <div>
                        <img className="block mx-auto h-24 w-20 pt-10 lg:pt-0" src="/assets/polygon-logo.svg" alt="polygon logo" />
                        <p className="text-green text-center bungee">Polygon</p>
                    </div>
                    <div>
                        <img className="block mx-auto h-24 w-20 pt-10 lg:pt-0" src="/assets/bnb-logo.svg" alt="BNB logo" />
                        <p className="text-green text-center bungee">BNB</p>
                    </div>
                    <div>
                        <img className="block mx-auto h-24 w-20 pt-10 lg:pt-0" src="/assets/avalanche-logo.svg" alt="avalanche logo" />
                        <p className="text-green text-center bungee">Avalanche</p>
                    </div>
                    <div>
                        <img className="block mx-auto h-24 w-20 pt-10 lg:pt-0" src="/assets/arbitrum-logo.svg" alt="arbitrum logo" />
                        <p className="text-green text-center bungee">Arbitrum</p>
                    </div>
                    <div>
                        <img className="block mx-auto h-24 w-20 pt-10 lg:pt-0" src="/assets/optimism-logo.svg" alt="optimism logo" />
                        <p className="text-green text-center bungee">Optimism</p>
                    </div>
                    <div>
                        <img className="block mx-auto h-24 w-20 pt-10 lg:pt-0" src="/assets/harmony-logo.svg" alt="harmony logo" />
                        <p className="text-green text-center bungee">Harmony</p>
                    </div>
                    <div>
                        <img className="block mx-auto h-24 w-20 pt-10 lg:pt-0" src="/assets/fantom-logo.svg" alt="fantom logo" />
                        <p className="text-green text-center bungee">Fantom</p>
                    </div>
                </div>
            </div>
        </>
    )
}