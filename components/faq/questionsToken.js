import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What happened to $CMK?",
    answer:
      "$CMK has been retired and will soon be replaced by another utility token.",
  },
  {
    question: "I have $CMK, can I still stake it?",
    answer:
      "Yes, you can.",
  },
  {
    question: "Will my $CMK and $xCMK (staked $CMK) both be converted to the new token?",
    answer:
      "Yes, they will.",
  },
]

const faqsList = [
  {
    question: "How can I stake my $CMK?",
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
                    <p className="text-base leading-7">Go to <a className="openSansMedium" href="https://app.credmark.com/stake" target="_blank" rel="noreferrer">https://app.credmark.com/stake</a>, connect your wallet holding $CMK, and follow the instructions.</p>
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