import ClosingCta from "./closingCta";

const rawData = [
  {
    documentation: "Etheruem - Prices & Pools",
    documentationLink:
      "https://app.snowflake.com/marketplace/listing/GZSTZPNMOXT/credmark-labs-ethereum-prices-pools",
    price: "$1500",
  },
];

export default function RawData() {
  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-0 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 py-16">
            <div className="bg-bggray p-4 lg:p-24 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 shadow-lg">
              <div>
                <h2 className="openSansMedium leading-6 text-credmarkpurple text-2xl lg:text-5xl pb-3 pt-10 lg:pt-0">
                  Raw Data
                </h2>
                <p className="text-base openSansMedium">
                  This is a new initiative. We hope you find it useful.
                </p>
                <p className="text-base">
                  Token prices are the heartbeat of the DeFi space. Credmark
                  uses on-chain DEX data to produce transparent, verifiable
                  pricing for tokens. These decentralized prices are derived
                  from liquidity and swap data from Uniswap and other DEXes.
                </p>
                <p className="text-base">
                  We have organized{" "}
                  <span className="openSansMedium">
                    prices of more than 1000 ERC-20 tokens
                  </span>{" "}
                  paired with 16 fiat currencies into a database that is easily
                  searchable. Along with the prices, we have also provided table
                  containing{" "}
                  <span className="openSansMedium">
                    crucial metrics of various liquidity pools
                  </span>{" "}
                  for each block. This data is available with impeccable{" "}
                  <span className="openSansMedium">
                    precision down to the block level
                  </span>
                  . We call this dataset <i>Ethereum - Prices & Pools</i>.{" "}
                </p>
                <p className="text-base">
                  Lots more datasets just like these are coming soon.
                </p>
                <p className="text-base">
                  Because we use Snowflake, and Snowflake has a Marketplace that
                  allows us to publish datasets, we’ve done just that.
                </p>
                <p className="text-base openSansMedium pt-5">
                  This is where you can find them:
                </p>
              </div>
              <div className="px-4 lg:px-0">
                <div className="mt-4 overflow-x-auto sm:-mx-6">
                  <table className="min-w-full border-1 border-bggray">
                    <thead className="bg-credmarkpurple">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 border-1 border-b-linepurple border-bggray"
                        >
                          Dataset
                        </th>
                        <th
                          scope="col"
                          className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white sm:table-cell border-1 border-b-linepurple border-bggray"
                        >
                          Where to find it
                        </th>
                        <th
                          scope="col"
                          className="hidden px-3 py-3.5 text-left text-sm font-semibold text-white lg:table-cell border-1 border-b-linepurple border-bggray"
                        >
                          Price (per month)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="border-1 border-b-linepurple border-bggray">
                      {rawData.map((rawData) => (
                        <tr key={rawData}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 border-1 border-b-linepurple border-bggray">
                            {rawData.documentation}
                          </td>
                          <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell border-1 border-b-linepurple border-bggray">
                            <a
                              href={rawData.documentationLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {rawData.documentationLink}
                            </a>
                          </td>
                          <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell border-1 border-b-linepurple border-bggray">
                            {rawData.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <p className="uppercase text-credmarkpurple text-3xl pt-10 pb-3 openSansMedium">
                  What you get
                </p>
                <p className="text-base">
                  Data sets that auto-update every hour. That’s what’s so cool
                  about the Snowflake setup. Every time we update our dataset,
                  yours is updated as well. It’s magic.
                </p>
                <p className="text-base">
                  If you need to evaluate our datasets, a trial is also
                  available. For the Ethereum datasets,{" "}
                  <span className="openSansMedium">
                    all data upto 2023 is available for free
                  </span>
                  .
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 border-1 border-y-credmarkpurple border-bggray mt-5">
                  <a
                    href="https://app.snowflake.com/marketplace/listing/GZSTZPNMOXT/credmark-labs-ethereum-prices-pools"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="flex pb-3 border-1 border-bggray lg:pl-5">
                      <img
                        src="/assets/ethereum-core.svg"
                        alt="tick"
                        width={80}
                      />
                      <p className="text-lg lg:text-2xl text-credmarkpurple py-14 pl-3 lg:pl-5">
                        Ethereum - Prices & Pools
                      </p>
                    </span>
                  </a>
                </div>
                <p className="uppercase text-credmarkpurple text-3xl pt-10 pb-3 openSansMedium">
                  Who needs it?
                </p>
                <p className="text-base">
                  We do, of course, since we’ve built the company on this data.
                  We know there are a lot of other use cases that will emerge in
                  the future. We can’t imagine what they’ll all be, but so many
                  people have been asking us for direct access to our database
                  (a lot from the BI community) that we came to the conclusion
                  that it was important to{" "}
                  <span className="openSansMedium">
                    make the data available.
                  </span>
                </p>
                <p className="text-base">
                  We’ve just released our first price data set and are curious
                  to see how it is used. If you’re a{" "}
                  <span className="openSansMedium">
                    data analyst, quant, or data scientist working in crypto
                  </span>{" "}
                  and you need the raw materials to uncover meaningful patterns
                  and trends, build robust risk assessment models, refine your
                  investment strategies, or optimize your portfolio allocation,{" "}
                  <a
                    href="https://app.snowflake.com/marketplace/providers/GZSTZPNMOWO/Credmark%20Labs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    start here
                  </a>
                  .
                </p>
                <ClosingCta />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
