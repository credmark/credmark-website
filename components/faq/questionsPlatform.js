import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What is unique about Credmark’s data?",
    answer:
      "The Credmark community maintains a data ETL of the Ethereum blockchain. As DeFi activity becomes important on other chains we will provide ETLs on those as well. The community also curates smart contract data.",
  },
  {
    question: "How does Credmark encourage data model contributors?",
    answer:
      "Model contributors will be compensated based on the efficacy and use of their models. Details will be released once this process has been automated",
  },
]

const faqsList = [
  {
    question: "What kind of research does Credmark produce?",
    answer:"Credmark produces original research covering:",
    answerOne:
      "individual assets (e.g., USDC),",
    answerTwo:
      "protocols (e.g., Aave), and",
    answerThree:
      "market segments (e.g, credit)",
  },
  {
    question: "What are the different roles on the platform?",
    preanswer: "Anyone working on the platform who owns $CMK has the ability to participate in governance.",
    answer:"Our platform consists of:",
    answerOne:
      "Research, data, and model contributors,",
    answerTwo:
      "Community managers, and",
    answerThree:
      "Political activists who propose platform direction via our governance process.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function QuestionsPlatforms() {
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
                      <p className="text-base leading-7">{faqList.answer}</p>
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
        </div>
      </div>
  )
}