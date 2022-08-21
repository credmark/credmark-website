import { CheckIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const tiers = [
  {
    name: 'Token API',
    href: '#learnMore',
    priceMonthly: 100,
    rateLimits: 'Unlimited',
    includedFeatures: ['Prices', 'Liquidity', 'Holdings', 'Metadata'],
  },
  {
    name: 'Portfolio API',
    href: '#learnMore',
    priceMonthly: 500,
    rateLimits: 'Unlimited',
    includedFeatures: [
      'Coming soon',
    ],
  },
  {
    name: 'Defi API',
    href: '#learnMore',
    priceMonthly: 1500,
    rateLimits: 'Unlimited',
    includedFeatures: [
      'All current and historical chain data.',
      'All verified smart contract inputs and outputs.',
      'Outputs of all models currently published on the Credmark platform.',
    ],
  },
]

export default function PricingPlan() {
  const [enabled, setEnabled] = useState(false)


  return (
    <div id="pricing">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <p className="uppercase text-green text-center font-bold">Pricing</p>
          <h1 className="tracking-tight font-bold gradientFont text-center">Product pricing plans</h1>
          <p className="mt-5 text-xl text-white text-center">
            Access the latest blockchain data, historical data or stream use case specific datasets.
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
              <div className="px-6 pt-8 pb-3">
                <h2 className="text-3xl leading-6 font-bold openSansMedium text-credmarkpurple text-center">{tier.name}</h2>
                <p className="mt-5 text-center">
                  <span className="text-4xl tracking-tight font-bold text-mutedGreen">${tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-mutedGreen">/month</span>
                </p>
              </div>
              <div className="pb-4 px-6">
                <h3 className="text-base font-medium text-credmarkpurple text-center openSansMedium">What's included</h3>
                <p className="text-center text-2xl pt-4">{tier.rateLimits}</p>
                <p className="text-center text-2xl text-gray-400">Rate limits</p>
                <ul role="list" className="mt-6 mb-14 space-y-4 p-0">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  className="absolute inset-x-0 bottom-0 mb-5 mx-4 block bg-green border border-gray-800 py-2 text-sm font-semibold text-black shadow-lg text-center"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}

          <div className="relative border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
            <div className="px-6 pt-8 pb-3">
              <h2 className="text-3xl leading-6 font-bold openSansMedium text-credmarkpurple text-center">Raw Data</h2>
              <div className="mt-5">
                <div className="sm:flex sm:flex-col sm:align-center">
                  <div className="flex justify-center">
                    <p className={classNames(enabled ? 'font-normal' : 'font-semibold',
                      "text-gray-1500 font-normal text-sm")}>Core</p>
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={classNames(
                        enabled ? 'bg-green' : 'bg-gray-200',
                        'mx-5 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      )}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          enabled ? 'translate-x-5' : 'translate-x-0',
                          'pointer-events-none inline-block h-5 w-5 rounded-full bg-purple-600 shadow transform ring-0 transition ease-in-out duration-200'
                        )} />
                    </Switch>
                    <p className={classNames(enabled ? 'font-semibold' : 'font-normal',
                      "text-gray-1500 font-normal text-sm")}>Smart contract</p>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-center">
                <span className="text-4xl tracking-tight font-bold text-mutedGreen">{classNames(
                  enabled ? '$500' : 'Free')}</span>{' '}
                <span className="text-base font-medium text-mutedGreen">/month</span>
              </p>
            </div>
            <div className="pb-10 px-6">
              <h3 className="text-base font-medium text-credmarkpurple text-center openSansMedium">What's included</h3>
              <ul role="list" className="mt-6 space-y-4 p-0">
                <li className="flex space-x-3">
                  <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Blocks</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Transactions</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Contracts</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Token transfers</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">Logs</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                  <span className="text-sm text-gray-500">3 additional tables</span>
                </li>
              </ul>
              <a
                href="https://www.snowflake.com/datasets/credmark-labs-ethereum-core/"
                className="absolute inset-x-0 bottom-0 my-5 mx-4 block bg-green border border-gray-800 py-2 text-sm font-semibold text-black shadow-lg text-center"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
