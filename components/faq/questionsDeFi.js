import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'


const whatIs = [
    {
      question: "What is the DeFi API?",
    },
  ]

  const whoShould = [
    {
      question: "Who should use the DeFi API?",
    },
  ]

  const cost = [
    {
      question: "What does the DeFi API cost?",
    },
  ]

  const rate = [
    {
      question: "Is the DeFi API rate limited?",
    },
  ]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function QuestionsDeFi() {
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
                    <p className="text-base leading-7">Our DeFi API allows DeFi expert developers to access the output of models built and deployed on the Credmark Model Framework.</p>
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
                    <p className="text-base leading-7">We are constantly surprised by the projects that pick up the DeFi API and build useful models to run through it.</p>
                    <p className="text-base leading-7">Here are some examples:</p>
                    <ul>
                        <li className="text-base leading-7">
                            Underwriting
                        </li>
                        <li className="text-base leading-7">
                            DeFi dashboards
                        </li>
                        <li className="text-base leading-7">
                            Risk management
                        </li>
                        <li className="text-base leading-7">
                            Pricing
                        </li>
                        <li className="text-base leading-7">
                            Insurance premiums
                        </li>
                        <li className="text-base leading-7">
                            Liquidity mining
                        </li>
                    </ul>
                    <p className="text-base leading-7">If you work in any of these areas, you owe it to yourself to understand how you could leverage the data available via this API.</p>
                    <p className="text-base leading-7">150+ financial models are already accessible. More are being built every day. Most DeFi API users are also model builders, but the two don’t necessarily go hand in hand. If you need models built for your use-case, <a className="openSansMedium" href="mailto:support@credmark.com" target="_blank" rel="noreferrer">contact us</a>.</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          <dl className="space-y-6 divide-y divide-gray-200 mt-8">
            {rate.map((rate) => (
              <Disclosure as="div" key={rate.question} className="text-black rounded-lg bg-white px-6 py-4">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-light text-black">{rate.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7">Yes, it is: 120 requests/minute.
                    <br />
                      If you need a higher rate limit, <a className="openSansMedium" href="mailto:support@credmark.com" target="_blank" rel="noreferrer">contact us</a>.</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          <dl className="space-y-6 divide-y divide-gray-200 mt-8">
            {cost.map((cost) => (
              <Disclosure as="div" key={cost.question} className="text-black rounded-lg bg-white px-6 py-4">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-light text-black">{cost.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7">The DeFI API costs $1500/month. 
                    <br />
                    This is an introductory price. The first 100 subscribers will never pay more.
                    <br />
                    If you are a non-profit or academic institution, <a className="openSansMedium" href="mailto:support@credmark.com" target="_blank" rel="noreferrer">contact us</a> for discounts.
                    <br />
                    If you need to deploy private models, please <a className="openSansMedium" href="mailto:support@credmark.com" target="_blank" rel="noreferrer">contact us</a>.</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
  )
}