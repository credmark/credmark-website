import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "How is the $CMK token distributed to the team and investors?",
    answer:
      "We have minted 100 million tokens, which are distributed as follows:",
      answerOne:
      "21.2M sold in pre-sale,",
    answerTwo:
      "10M sold in public sale,",
    answerThree:
      "24M distributed to core team and advisors (vesting over 3 years),",
      answerFour:
      "44.8M owned by the DAO.",
  },
]

const faqsList = [
  {
    question: "The DAO’s tokens are being used to:",
    answerOne:
      "Reward partners and contributors.",
    answerTwo:
      "Pay for services.",
    answerThree:
      "Provide market liquidity.",
  },
  {
    question: "What is the utility of the Credmark token $CMK?",
    answerOne:
      "$CMK will be used for governance,",
    answerTwo:
      "$CMK will be required to access our tools and APIs,",
    answerThree:
      "$CMK will be used to reward the community for: providing risk-related research, curating high-integrity data, and creating and validating models.",
  },
]

const faqsPurchaseList = [
  {
    question: "Where can $CMK be purchased?",
    answer:
      "CMK can be purchased across three different swaps:",
    answerOne:
      "Uniswap CMK/USDC",
      answerOneLink:
      "https://info.uniswap.org/#/pools/0xf7a716e2df2bde4d0ba7656c131b06b1af68513c",
    answerTwo:
      "Uniswap CMK/ETH",
      answerTwoLink:
      "https://info.uniswap.org/#/pools/0x59e1f901b5c33ff6fae15b61684ebf17cca7b9b3",
    answerThree:
      "Sushiswap CMK/ETH",
    answerThreeLink:
      "https://analytics.sushi.com/tokens/0x68cfb82eacb9f198d508b514d898a403c449533e",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function QuestionsToken() {
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
                      <p className="text-base leading-7">{faq.answer}</p>
                      <ul>
                      <li className="text-base leading-7">{faq.answerOne}</li>
                      <li className="text-base leading-7">{faq.answerTwo}</li>
                      <li className="text-base leading-7">{faq.answerThree}</li>
                      <li className="text-base leading-7">{faq.answerFour}</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          <dl className="space-y-6 divide-y divide-gray-200 mt-8">
            {faqsList.map((faqList) => (
              <Disclosure as="div" key={faqList.question} className="text-black rounded-lg bg-white px-6 py-4">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-light text-black">{faqList.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <ul>
                      <li className="text-base leading-7">{faqList.answerOne}</li>
                      <li className="text-base leading-7">{faqList.answerTwo}</li>
                      <li className="text-base leading-7">{faqList.answerThree}</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
          <dl className="space-y-6 divide-y divide-gray-200 mt-8">
            {faqsPurchaseList.map((faqPurchaseList) => (
              <Disclosure as="div" key={faqPurchaseList.question} className="text-black rounded-lg bg-white px-6 py-4">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-light text-black">{faqPurchaseList.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7">{faqPurchaseList.answer}</p>
                      <ul>
                      <p className="text-base text-black italic">{faqPurchaseList.answerOne}</p>
                      <a href={faqPurchaseList.answerOneLink} target="_blank" rel="noreferrer"><p className="text-base">{faqPurchaseList.answerOneLink}</p></a>
                      <p className="text-base text-black italic">{faqPurchaseList.answerTwo}</p>
                      <a href={faqPurchaseList.answerTwoLink} target="_blank" rel="noreferrer"><p className="text-base">{faqPurchaseList.answerTwoLink}</p></a>
                      <p className="text-base text-black italic">{faqPurchaseList.answerThree}</p>
                      <a href={faqPurchaseList.answerThreeLink} target="_blank" rel="noreferrer"><p className="text-base">{faqPurchaseList.answerThreeLink}</p></a>
                      </ul>
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