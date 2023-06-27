import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqsList = [
  {
    question: "When will the Portfolio API be available?",
  },
];

const whatIs = [
  {
    question: "What is the Portfolio API?",
  },
];

const whoShould = [
  {
    question: "Who should use the Portfolio API?",
  },
];

const cost = [
  {
    question: "What does the Portfolio API cost?",
  },
];

const rate = [
  {
    question: "Is the Portfolio API rate limited?",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function QuestionsPortfolio() {
  return (
    <div>
      <div className="max-w-7xl mx-auto pt-3">
        <dl className="space-y-6 divide-y divide-gray-200 mt-8">
          {faqsList.map((faqList) => (
            <Disclosure
              as="div"
              key={faqList.question}
              className="text-black rounded-lg bg-white px-6 py-4"
            >
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-light text-black">
                        {faqList.question}
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7">
                      We are actively developing this API with some of our
                      customers. If you think you could use it, please{" "}
                      <a
                        className="openSansMedium"
                        href="mailto:support@credmark.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact us
                      </a>
                      . We would love your input.
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
        <dl className="space-y-6 divide-y divide-gray-200 mt-8">
          {whatIs.map((whatIs) => (
            <Disclosure
              as="div"
              key={whatIs.question}
              className="text-black rounded-lg bg-white px-6 py-4"
            >
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-light text-black">
                        {whatIs.question}
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7">
                      Our Portfolio API gives developers easy access aggregate
                      prices, price series, portfolio activity (cashflow,
                      transactions, and basic risk metrics.
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
        <dl className="space-y-6 divide-y divide-gray-200 mt-8">
          {whoShould.map((whoShould) => (
            <Disclosure
              as="div"
              key={whoShould.question}
              className="text-black rounded-lg bg-white px-6 py-4"
            >
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-light text-black">
                        {whoShould.question}
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7">
                      Anyone who needs to display users’ portfolio information.
                      Sometimes it’s a lot, like transaction details, and
                      sometimes it’s a little, like the portfolio’s value in
                      USD.
                    </p>
                    <p className="text-base leading-7">
                      Some common use cases include:
                    </p>
                    <ul>
                      <li className="text-base leading-7">
                        a lender needing to understand a borrower’s financial
                        situation,
                      </li>
                      <li className="text-base leading-7">
                        a treasury manager needing to track positions over time,
                      </li>
                      <li className="text-base leading-7">
                        a wallet needing to show current and past state, and
                      </li>
                      <li className="text-base leading-7">
                        a portfolio aggregator needing to roll up data from
                        multiple wallets.
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
        <dl className="space-y-6 divide-y divide-gray-200 mt-8">
          {rate.map((rate) => (
            <Disclosure
              as="div"
              key={rate.question}
              className="text-black rounded-lg bg-white px-6 py-4"
            >
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-light text-black">
                        {rate.question}
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7">
                      Yes, it is: 600 requests/minute.
                      <br />
                      If you need a higher rate limit,{" "}
                      <a
                        className="openSansMedium"
                        href="mailto:support@credmark.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact us
                      </a>
                      .
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
        <dl className="space-y-6 divide-y divide-gray-200 mt-8">
          {cost.map((cost) => (
            <Disclosure
              as="div"
              key={cost.question}
              className="text-black rounded-lg bg-white px-6 py-4"
            >
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                      <span className="font-light text-black">
                        {cost.question}
                      </span>
                      <span className="ml-6 h-7 flex items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7">
                      You can start using portfolio API for free. If you need
                      higher rate limits, you can purchase a key starting form
                      $99/month.
                      <br />
                      If you are a non-profit or academic institution,{" "}
                      <a
                        className="openSansMedium"
                        href="mailto:support@credmark.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        contact us
                      </a>{" "}
                      for discounts.
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
