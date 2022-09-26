import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'


const whatIs = [
    {
      question: "What is the CMF?",
    },
  ]

  const whoShould = [
    {
      question: "Who should use CMF?",
    },
  ]

  const cost = [
    {
      question: "What does the CMF cost?",
    },
  ]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function QuestionsCMF() {
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
                    <p className="text-base leading-7">
                        The <span className="italic">CMF</span> is a development and execution environment that sits between our curated blockchain data and our APIs.</p>
                        <p className="text-base leading-7">
                        The <span className="italic">CMF</span> includes a Python development environment that allows quants to build sophisticated financial models using blockchain data. A quant can write and test their models on their local hardware and then deploy them into the publicly-accessible CMF. Once deployed, public models are available via the DeFi API.
                        </p> 
                        <p className="text-base leading-7">
                        The CMF is an Excel-free zone.
                        </p>
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
                    <p className="text-base leading-7">Any DeFi or TradFi (we don’t discriminate 😉) quant who wants to build models in Python with easy access to blockchain data.</p>
                    <p className="text-base leading-7">Quants and data scientists who try the CMF are amazed by its power and simplicity.</p>
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
                    <p className="text-base leading-7">The CMF costs nothing to use, but if you want to access your models’ outputs via API, you will need to purchase the <span className="italic">DeFi API.</span></p>
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