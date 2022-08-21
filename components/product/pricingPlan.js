/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/solid'

const tiers = [
  {
    name: 'Hobby',
    href: '#',
    priceMonthly: 12,
    description: 'All the basics for starting a new business',
    includedFeatures: ['Potenti felis, in cras at at ligula nunc.', 'Orci neque eget pellentesque.'],
  },
  {
    name: 'Freelancer',
    href: '#',
    priceMonthly: 24,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
    ],
  },
  {
    name: 'Startup',
    href: '#',
    priceMonthly: 32,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
    ],
  },
  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: 48,
    description: 'All the basics for starting a new business',
    includedFeatures: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
      'Id sed tellus in varius quisque.',
      'Risus egestas faucibus.',
      'Risus cursus ullamcorper.',
    ],
  },
]

export default function PricingPlan() {
  return (
    <div id="pricing">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
            <p className="uppercase text-green text-center font-bold">Pricing</p>
          <h1 className="tracking-tight font-bold gradientFont text-center">Different plans for variety of use cases</h1>
          <p className="mt-5 text-xl text-white text-center">
            Access the latest blockchain data, historical data or stream use case specific datasets. 
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-bold openSansMedium text-credmarkpurple text-center">{tier.name}</h2>
                <p className="mt-8 text-center">
                  <span className="text-4xl tracking-tight font-bold text-green">${tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-green">/month</span>
                </p>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-base font-medium text-credmarkpurple text-center openSansMedium">What's included</h3>
                <ul role="list" className="mt-6 space-y-4 p-0">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.href}
                  className="mt-8 block bg-green border border-gray-800 py-2 text-sm font-semibold text-black shadow-lg text-center"
                >
                    Sign up
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
