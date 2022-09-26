import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What is Credmark?",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Questions() {
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-3">
        <dl className="space-y-6 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="text-black rounded-lg bg-white px-6 py-4">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-light text-black">{faq.question}</span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7">Credmark is a DeFi data provider for developers.</p>
                    <p className="text-base leading-7">We provide raw and interpreted <span className="openSansMedium">blockchain databases</span> via the Snowflake Marketplace.</p>
                    <p className="text-base leading-7">We provide simple <span className="openSansMedium">APIs</span> for developers. </p>
                    <p className="text-base leading-7">Our <span className="italic">Token API</span> gives developers easy access to current and historical token prices, liquidity, holdings, and token metadata.</p>
                    <p className="text-base leading-7">Our <span className="italic">Portfolio API</span> gives developers easy access aggregate prices, price series, portfolio activity (cashflow, transactions, and basic risk metrics)</p>
                    <p className="text-base leading-7">Our <span className="italic">DeFi API</span> allows DeFi expert developers to access the output of models built and deployed on the Credmark Model Framework.</p>
                    <p className="text-base leading-7">Our <span className="italic">Credmark Model Framework (CMF)</span> allows developers to build and deploy <span className="openSansMedium">financial models</span> in Python. These models have direct access to current and historical blockchain data. The CMF gives quants the ability to work seamlessly with raw blockchain data, existing models, all Python frameworks, familiar tools, and then publish their work for access via API.</p>
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