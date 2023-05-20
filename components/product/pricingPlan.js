import { ArrowRightIcon, CheckIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

const Tab = ({ href, isSelected, title }) => (
  <Link href={href}>
    <div
      className={
        isSelected
          ? "text-center  cursor-pointer py-4 px-6 border-b-2 border-green min-h-full"
          : "text-center cursor-pointer py-4 px-6 border-b-2 border-white min-h-full"
      }
    >
      <a
        className={
          isSelected
            ? "text-center cursor-pointer openSansMedium text-xl font-bold text-green text-center"
            : "text-center  cursor-pointer openSansMedium text-xl font-bold text-white text-center"
        }
      >
        {title}
      </a>
    </div>
  </Link>
);

const tokenApiTiers = [
  {
    name: "Discover",
    href: "https://access.credmark.com/register",
    learnMoreHref: "/product?tokenApi=true#learnMore",
    requestsPerMin: "30",
    requestsPerMonth: "200,000",
    historicalData: "50",
    includedFeatures: ["Prices", "Metadata", "Liquidity", "Holdings"],
  },
  {
    name: "Build",
    href: "https://access.credmark.com/register",
    learnMoreHref: "/product?tokenApi=true#learnMore",
    priceMonthly: 49,
    requestsPerMin: "120",
    requestsPerMonth: "1,000,000",
    historicalData: "2000",
    includedFeatures: ["Prices", "Metadata", "Liquidity", "Holdings"],
  },
  {
    name: "Scale",
    href: "https://access.credmark.com/register",
    learnMoreHref: "/product?tokenApi=true#learnMore",
    priceMonthly: 199,
    requestsPerMin: "600",
    requestsPerMonth: "10,000,000",
    historicalData: "4000",
    includedFeatures: ["Prices", "Metadata", "Liquidity", "Holdings"],
  },
];

const portfolioApiTiers = [
  {
    name: "Portfolio API",
    href: "https://access.credmark.com/register",
    learnMoreHref: "/product?portfolioApi=true#learnMore",
    priceMonthly: 500,
    requestsPerMin: "300",
    includedFeatures: ["Prices", "Activity", "Risk metrics"],
  },
];

const defiApiTiers = [
  {
    name: "DeFi API",
    href: "https://access.credmark.com/register",
    learnMoreHref: "/product?defiApi=true#learnMore",
    priceMonthly: 1500,
    requestsPerMin: "120",
    includedFeatures: [
      "All current and historical chain data",
      "All verified smart contract inputs and outputs",
      "Outputs of all models currently published on the Credmark platform",
    ],
  },
];

const rawDataTiers = [
  {
    name: "Core",
    href: "https://www.snowflake.com/datasets/credmark-labs-ethereum-core",
    learnMoreHref: "/product?rawData=true#learnMore",
    includedFeatures: ["Blocks", "Transactions", "Contracts"],
  },
  {
    name: "Smart Contract",
    href: "https://www.snowflake.com/datasets/credmark-labs-ethereum-core",
    learnMoreHref: "/product?rawData=true#learnMore",
    priceMonthly: 500,
    includedFeatures: [
      "Decoded events",
      "Decoded function calls",
      "Protocol Groupings",
    ],
  },
];

export default function PricingPlan() {
  const { query } = useRouter();

  const isTabOneSelected = !!query.tokenApi;
  const isTabTwoSelected = !!query.rawData;
  const isTabThreeSelected = !!query.defiApi;
  const isTabFourSelected = !!query.portfolioApi;

  const tiers = isTabOneSelected
    ? tokenApiTiers
    : isTabFourSelected
    ? portfolioApiTiers
    : isTabThreeSelected
    ? defiApiTiers
    : rawDataTiers;

  return (
    <div id="pricing">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="tracking-tight font-bold gradientFont text-center">
            Instant DeFi Data
          </h1>
          <p className="mt-5 text-xl text-white text-center">
            Simple and transparent pricing.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 max-w-6xl block mx-auto">
          <Tab
            href="/pricing/?tokenApi=true#pricing"
            title="Token API"
            isSelected={isTabOneSelected}
          />
          <Tab
            href="/pricing/?portfolioApi=true#pricing"
            title="Portfolio API"
            isSelected={isTabFourSelected}
          />
          <Tab
            href="/pricing/?defiApi=true#pricing"
            title="DeFi API"
            isSelected={isTabThreeSelected}
          />
          <Tab
            href="/pricing/?rawData=true#pricing"
            title="Raw Data "
            isSelected={isTabTwoSelected}
          />
        </div>

        <div className="mt-12 sm:mt-16 sm:space-y-0 flex flex-row flex-wrap justify-center lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`hApi relative border-1 border-gray-200 shadow-sm divide-y divide-gray-200 bg-white w-full sm:w-1/2 xl:w-1/4 max-w-sm ${
                index === 0 ? "rounded-l-lg" : ""
              } ${index === tiers.length - 1 ? "rounded-r-lg" : ""}`}
            >
              <div className="px-6 pt-8 pb-3">
                <h2 className="text-3xl leading-6 font-bold openSansMedium text-credmarkpurple text-center">
                  {tier.name}
                </h2>
                <p className="mt-5 text-center">
                  {tier.priceMonthly ? (
                    <>
                      <span className="text-4xl tracking-tight font-bold text-mutedGreen">
                        ${tier.priceMonthly}
                      </span>{" "}
                      <span className="text-base font-medium text-mutedGreen">
                        /month
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl tracking-tight font-bold text-mutedGreen">
                      FREE
                    </span>
                  )}
                </p>
              </div>
              <div className="pb-4 px-6">
                <ul role="list" className="my-6 space-y-4 p-0">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon
                        className="flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                {tier.requestsPerMin && (
                  <p className="text-gray-400 text-sm pb-0">
                    Requests/min: {tier.requestsPerMin}
                  </p>
                )}
                {tier.requestsPerMonth && (
                  <p className="text-gray-400 text-sm pb-0">
                    Requests/month: {tier.requestsPerMonth}
                  </p>
                )}
                {tier.historicalData && (
                  <p className="text-gray-400 text-sm pb-0">
                    Historical Data: {tier.historicalData}/request
                  </p>
                )}
                <div className="mt-5">
                  <Link href={tier.learnMoreHref} passHref>
                    <a className="text-mutedGreen text-sm font-semibold">
                      Learn More <ArrowRightIcon className="inline h-4" />
                    </a>
                  </Link>
                </div>
                <a
                  href={tier.href}
                  target="_blank"
                  className="lg:absolute inset-x-0 bottom-0 mb-5 mx-4 block bg-green border border-gray-800 py-2 text-sm font-semibold text-black shadow-lg text-center"
                  rel="noreferrer"
                >
                  Start building
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-white text-sm pt-10">
          Introductory pricing. The first 100 customers will enjoy this price
          forever.
        </p>
        <p className="text-white">
          Need higher rate limits? Academic? Non-profit?{" "}
          <a
            className="text-white"
            href="mailto:support@credmark.com"
            target="_blank"
            rel="noreferrer"
          >
            Contact us ✅
          </a>
        </p>
      </div>
    </div>
  );
}
