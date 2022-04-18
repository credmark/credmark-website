import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What is Credmark?",
    answer:
      "Credmark is a community-driven project that connects data providers, risk modelers, and DeFi users. Our community curates crypto data, develops risk management tools, and publishes industry-leading research. We aim to bring institutional grade risk management to individuals and to allow DeFi developers to embed those tools into their applications.",
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
              <Disclosure as="div" key={faq.question} className="text-black border-2 border-gray rounded-lg bg-gray-50 p-5">
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
        </div>
      </div>
  )
}