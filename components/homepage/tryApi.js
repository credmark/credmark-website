import Link from "next/link";

export default function TryApi() {
  return (
    <>
      <div className="mx-5 pt-20 pb-20 max-w-7xl block lg:mx-auto">
        <div>
          <h1 className="gradientFont">Easy-to-use APIs</h1>
          <p>
            Access historical and real-time data instantly. Free.
          </p>
          <button
            type="button"
            className="mt-5 heroButton px-6 py-2 shadow-sm text-sm font-medium"
          >
            <a
              href="https://access.credmark.com/register"
              target="_blank"
              rel="noreferrer"
            >
              <p className="flex text-white">
                Start for free{" "}
                <img
                  className="pt-0.5 pl-2"
                  alt="arrow right"
                  src="../assets/arrow-white.svg"
                />
              </p>
            </a>
          </button>
        </div>
        <div>
          <div className="max-w-7xl mx-auto px-4 lg:px-0">
            <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
              <div className="relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-black">
                <div className="px-6 pt-8">
                  <h2 className="text-3xl leading-6 font-bold openSansMedium text-green text-center">
                    Token API
                  </h2>
                  <p className="text-white pt-10 text-sm">
                    Access granular token data.
                  </p>
                </div>
                <div className="pb-4 px-6">
                  <ul className="tick">
                    <li className="text-white text-sm whiteTick py-2 pl-1">
                      Current and historical token prices
                    </li>
                    <li className="text-white text-sm whiteTick py-2 pl-1">
                      DEX liquidity
                    </li>
                    <li className="text-white text-sm whiteTick py-2 pl-1">
                      Holdings
                    </li>
                    <li className="text-white text-sm whiteTick py-2 pl-1">
                      Token metadata
                    </li>
                  </ul>
                  <Link href="/product/?tokenApi=true#learnMore">
                    <div className="cursor-pointer lg:absolute lg:inset-x-0 lg:bottom-0 mb-5 mx-4 block bg-green border py-2 text-sm font-semibold text-black shadow-lg text-center">
                      <p>Learn more</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-black">
                <div className="px-6 pt-8">
                  <h2 className="text-3xl leading-6 font-bold openSansMedium text-green text-center">
                    Portfolio API
                  </h2>
                  <p className="text-white pt-10 text-sm">
                    Trace portfolio activity.
                  </p>
                </div>
                <div className="pb-4 px-6">
                  <ul className="tick">
                    <li className="text-white text-sm whiteTick py-2 pl-1">
                      Token price and balance
                    </li>
                    <li className="text-white text-sm whiteTick py-2 pl-1">
                      Wallet activity
                    </li>
                    <li className="text-white text-sm whiteTick py-2 pl-1">
                      Risk metrics
                    </li>
                  </ul>
                  <Link href="/product/?portfolioApi=true#learnMore">
                    <div className="cursor-pointer lg:absolute lg:inset-x-0 lg:bottom-0 mb-5 mx-4 block bg-green border py-2 text-sm font-semibold text-black shadow-lg text-center">
                      <p>Learn more</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-black">
                <div className="px-6 pt-8">
                  <h2 className="text-3xl leading-6 font-bold openSansMedium text-green text-center">
                    DeFi API
                  </h2>
                  <p className="text-white pt-10 text-sm">
                    Run any transformation with one endpoint.
                  </p>
                </div>
                <div className="pb-4 px-6">
                  <ul className="tick">
                    <li className="text-white text-sm whiteTick py-2 pl-1">
                      Access 400+ existing transformations
                    </li>
                    <li className="text-white text-sm whiteTick py-2 pl-1">
	              Build your own transformations and access
                    </li>
                    <li className="text-white text-sm whiteTick py-2 pl-1">
                      Check out the Credmark Terminal, powered by our DeFi API
                    </li>
                  </ul>
                  <Link href="/product/?defiApi=true#learnMore">
                    <div className="cursor-pointer lg:absolute lg:inset-x-0 lg:bottom-0 mb-5 mx-4 block bg-green border py-2 text-sm font-semibold text-black shadow-lg text-center">
                      <p>Learn more</p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-black">
                <div className="px-6 pt-8">
                  <h2 className="text-3xl leading-6 font-bold openSansMedium text-green text-center">
                    Raw data
                  </h2>
                  <p className="text-white pt-10 text-sm">
                    Fetch the latest block or access historical blockchain data
                    to monitor or trace any activity from the genesis block. Our
                    data is accessible via the Snowflake Marketplace. We
                    currently support:
                  </p>
                </div>
                <div className="pb-4 px-6">
                  <ul className="tick">
                    <li className="text-white text-sm whiteTick py-2 pl-1">
                      Ethereum
                    </li>
                    <li className="text-white text-sm whiteTick py-2 pl-1">
                      Polygon
                    </li>
                    <li className="text-white text-sm whiteTick py-2 pl-1">
                      BSC
                    </li>
                  </ul>
                  <Link href="/product/?rawData=true#learnMore">
                    <div className="cursor-pointer lg:absolute lg:inset-x-0 lg:bottom-0 mb-5 mx-4 block bg-green border py-2 text-sm font-semibold text-black shadow-lg text-center">
                      <p>Learn more</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
