import ClosingCta from "./closingCta";

const people = [
  {
    documentation: "Concepts (Coming soon)",
    image: "/assets/documentation-api.svg",
  },
  {
    documentation: "Referenceb (Coming soon)",
    image: "/assets/documentation-api.svg",
  },
];

export default function PortfolioApi() {
  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-0 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 py-16">
            <div className="bg-bggray p-4 lg:p-24 border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 shadow-lg">
              <div>
                <h2 className="openSansMedium leading-6 text-credmarkpurple text-2xl lg:text-5xl pb-3 pt-10 lg:pt-0">
                  Portfolio API
                </h2>
                <p className="openSansMedium">
                  You’re dealing with crypto portfolios?
                </p>
                <p className="text-base font-bold">
                  You need to show your users what they own, how much it’s worth
                  today, how much it was worth, and how risky the portfolio is?
                  You’ve come to the right place. We’ll give you fast, easy
                  access to the portfolio data your users want.
                </p>
                <p className="text-base font-bold">But not today.</p>
                <p className="text-base font-bold">
                  This API is still under development. If this is something
                  you’re going to need, get in touch so that we can make sure we
                  include the data you want. Also, you might want to be part of
                  our private beta.
                </p>
              </div>
              <div>
                <p className="uppercase text-credmarkpurple text-3xl pt-10 pb-3 openSansMedium">
                  What you get
                </p>
                <p className="text-base">
                  We’re still working on this. Our internal wish list is very
                  long. When we first publish, you’ll be able to:
                </p>
                <ul>
                  <li className="text-base openSansMedium">
                    price a portfolio,
                  </li>
                  <li className="text-base openSansMedium">
                    retrieve portfolio activity (cashflow, transactions), and
                  </li>
                  <li className="text-base openSansMedium">
                    retrieve basic risk metrics (VaR and Sharpe ratio ).
                  </li>
                </ul>
                <p className="text-base">
                  You could, of course, price the portfolio by making a lot of
                  calls to the <span className="openSansMedium">Token API</span>
                  , but that could be very costly. If you need the prices of
                  many tokens, or you need prices across a long series of
                  blocks, you’ll definitely want to use this API. In fact, you
                  won’t even have to send us a list of tokens.{" "}
                  <span className="openSansMedium">
                    Send us a list of wallet addresses and we’ll figure out
                    what’s there
                  </span>
                  .
                </p>
                <p className="text-base">
                  Tokens flow in and out of wallets. You could use a Web3 API to
                  get all that information, but it’s complicated. The Portfolio
                  API makes it easy.
                </p>
                <p className="text-base">
                  Traditional finance is very good at managing risk. DeFi isn’t.
                  That’s why we built Credmark. Our DeFi API gives you{" "}
                  <span className="openSansMedium">
                    direct access to all of the financial models built on our
                    platform
                  </span>
                  . Some of those compute risk associated with portfolios.
                  Instead of forcing you to become a DeFi financial modeling
                  expert, we’re going to make the best models available to you
                  through this API.
                </p>
              </div>
              <div>
                <p className="uppercase text-credmarkpurple text-3xl pt-10 pb-3 openSansMedium">
                  Who needs it?
                </p>
                <p className="text-base">
                  Anyone who needs to display users’ portfolio information.
                  Sometimes it’s a lot, like transaction details, and sometimes
                  it’s a little, like the portfolio’s value in USD.
                </p>
                <p className="text-base pt-3 openSansMedium">
                  Some common use cases include:
                </p>
                <div>
                  <p className="py-3 pr-3.5 text-base">
                    <span>
                      <img
                        className="float-left mr-4"
                        src="/assets/checkedCircle.svg"
                        alt="tick"
                        width={26}
                      />
                      a lender needing to understand a borrower’s financial
                      situation,
                    </span>
                  </p>
                  <p className="py-3 pr-3.5 text-base">
                    <span>
                      <img
                        className="float-left mr-4"
                        src="/assets/checkedCircle.svg"
                        alt="tick"
                        width={26}
                      />
                      a treasury manager needing to track positions over time,
                    </span>
                  </p>
                  <p className="py-3 pr-3.5 text-base">
                    <span>
                      <img
                        className="float-left mr-4"
                        src="/assets/checkedCircle.svg"
                        alt="tick"
                        width={26}
                      />
                      a wallet needing to show current and past state, and
                    </span>
                  </p>
                  <p className="py-3 pr-3.5 text-base">
                    <span>
                      <img
                        className="float-left mr-4"
                        src="/assets/checkedCircle.svg"
                        alt="tick"
                        width={26}
                      />
                      a portfolio aggregator needing to roll up data from
                      multiple wallets.
                    </span>
                  </p>
                </div>
              </div>

              <div>
                <span className="flex pt-9 pb-3">
                  <img
                    className="mr-4"
                    src="/assets/documentation.svg"
                    alt="tick"
                    width={120}
                  />
                  <p className="text-2xl text-lightpurple font-bold pt-10">
                    <span className="openSansMedium">Documentation</span>
                  </p>
                </span>
                <div>
                  <div className="-mx-4 mt-4 overflow-x-auto sm:-mx-6 md:mx-0">
                    <table className="min-w-full">
                      <tbody>
                        {people.map((person) => (
                          <tr key={person}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-credmarkpurple sm:pl-6 border-1 border-b-linepurple border-bggray">
                              <span>
                                <img
                                  className="float-left mr-4"
                                  src={person.image}
                                  alt="tick"
                                  width={26}
                                />
                                {person.documentation}
                              </span>
                            </td>
                            <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-extralightgray text-right sm:table-cell border-1 border-b-linepurple border-bggray">
                              <a
                                href={person.documentationLink}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {person.documentationLink}{" "}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <ClosingCta />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
