import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'


const whatIs = [
    {
        question: "How is Credmark’s data different from raw blockchain data?",
    },
]

const whoShould = [
    {
        question: "What is First Order Data?",
    },
]

const rate = [
    {
        question: "What is Second Order Data?",
    },
]

const cost = [
    {
        question: "What is Third Order Data?",
    },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function QuestionsData() {
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
                                        <p className="text-base leading-7">It isn’t. We’ve organized it so that it can be accessed quickly and we’ve decoded all the binary data that is useless in its native format.</p>
                                        <p className="text-base leading-7">We classify our data based on how much processing it has undergone. Although this classification isn’t of great importance to users accessing the data either directly or via the CMF, it may sometimes be useful to understand how it has been transformed.</p>
                                        <p className="text-base leading-7">We classify our data into three categories:</p>
                                        <ul>
                                            <li className="text-base leading-7">
                                            First Order,
                                            </li>
                                            <li className="text-base leading-7">
                                            Second Order, and
                                            </li>
                                            <li className="text-base leading-7">
                                            Third Order.
                                            </li>
                                        </ul>
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
                                        <p className="text-base leading-7"><span className="italic">First Order Data</span> is the raw data exported from a blockchain, indexed for speedy access. The inputs and outputs of smart contracts are binary blocks that are unintelligible without additional processing.</p>
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
                                        <p className="text-base leading-7"><span className="italic">Second Order Data</span> is the result of processing of binary blocks found on blockchains. On EVM chains, these blocks are smart contract inputs and outputs.</p>
                                        <p className="text-base leading-7">Once generated, <span className="italic">Second Order Data</span> is indexed for easy access.</p>
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
                                        <p className="text-base leading-7"><span className="italic">Third Order Data</span> is the output of any model built on the <span className="italic">CMF</span>.</p>
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