import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const whatIs = [
  {
    question: "What is the Token API?",
  },
]

const whoShould = [
  {
    question: "Who should use the Token API?",
    answer: "Anyone building a wallet, a trading platform, or any kind of DeFi dashboard is going to need data provided by the Token API.",
  },
]



export default function QuestionsTokenApi() {
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-3">
      <dl className="space-y-6 divide-y divide-gray-200 mt-8">
            {whatIs.map((whatIs) => (
              <Disclosure as="div" key={whatIs.question} className="text-black rounded-lg bg-white px-6 py-4">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-light text-black">{whatIs.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7">Our <span className="italic">Token API</span> gives developers easy access to current and historical token prices, liquidity, holdings, and token metadata.</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          <dl className="space-y-6 divide-y divide-gray-200 mt-8">
            {whoShould.map((whoShould) => (
              <Disclosure as="div" key={whoShould.question} className="text-black rounded-lg bg-white px-6 py-4">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-light text-black">{whoShould.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7">Our <span className="italic">Token API</span> gives developers easy access to current and historical token prices, liquidity, holdings, and token metadata.</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          <dl className="space-y-6 divide-y divide-gray-200 mt-8">
              <Disclosure as="div" className="text-black rounded-lg bg-white px-6 py-4">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-light text-black">Is the Token API rate limited?</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7">Yes, it is: 600 requests/minute.
                    <br />
                      If you need a higher rate limit, <a className="openSansMedium" href="mailto:support@credmark.com" target="_blank" rel="noreferrer">contact us</a>.</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="text-black rounded-lg bg-white px-6 py-4">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-light text-black">How much does the Token API cost?</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7">The Token API costs $100/month. 
                    <br />
                    This is an introductory price. The first 100 subscribers will never pay more.
                    <br />
                    If you are a non-profit or academic institution, <a className="openSansMedium" href="mailto:support@credmark.com" target="_blank" rel="noreferrer">contact us</a> for discounts.</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
          </dl>
        </div>
      </div>
  )
}