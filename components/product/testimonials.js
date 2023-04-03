const testimonials = [
    [
        [
            {
                body: 'Credmarks platform allows us to develop DeFi risk models faster than we ever could before. The integration of curated data sets, Python, and a library of pre-built data structures and models are an incredible springboard.',
                author: {
                    name: 'Grant Cermak, CEO',
                    company: 'irulast',
                    companyUrl: 'https://irulast.com/',
                    imageUrl:
                        '../assets/irulast-logo.svg',
                },
            },
        ],
        [
            {
                body: 'We started using Credmarks Token API and then needed some custom portfolio calculations. Credmark was able to build and deploy those in days. Thanks to their DeFi API we were able to immediately integrate that new data into our app.',
                author: {
                    name: 'Daniel Tse, CTO',
                    company: 'Picante',
                    companyUrl: 'https://picante.io/',
                    imageUrl:
                        '../assets/picante-logo-testimonials.svg',
                },
            },
        ],
    ],
    [
        [
            {
                body: 'Credmark enables us to easily write our own models, query historical data sets via APIs using an open source framework. This means we can focus on product iteration instead of building our own web3 data stack, or creating custom integrations to wrangle data.',
                author: {
                    name: 'Exa, CTO',
                    company: 'Exa',
                    companyUrl: 'https://exponent.cx/',
                    imageUrl:
                        '../assets/exponent-logo.svg',
                },
            },
        ],
        [
            {
                body: 'Our deal with REDACTED was only made possible with Credmark’s DeFi API and the Credmark Model Framework. With the platforms, lenders can know the facility is backed by verifiable on-chain data.',
                author: {
                    name: 'Cwalk, Founder',
                    company: 'Debt dao',
                    companyUrl: 'https://debtdao.finance/',
                    imageUrl:
                        '../assets/debt-dao.svg',
                },
            },
        ],
    ],
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Testimonials() {
    return (
        <div className="relative isolate bg-black">
            <div className="py-10 lg:py-24">
                <h2 className="text-green max-w-7xl block m-auto font-extrabold text-center">
                    What our customers say
                </h2>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 md:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col">
                        {testimonials.map((columnGroup, columnGroupIdx) => (
                            <div key={columnGroupIdx}>
                                {columnGroup.map((column, columnIdx) => (
                                    <div
                                        key={columnIdx}
                                    >
                                        {column.map((testimonial) => (
                                            <figure
                                                key={testimonial.author.name}
                                                className="rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-900/5 my-5"
                                            >
                                                <div className="grid grid-cols-3">
                                                    <div className="col-span-1 py-5 lg:pr-5 m-auto">
                                                        <a href={testimonial.author.companyUrl} target="_blank" rel="noreferrer">
                                                            <img className="max-h-48" src={testimonial.author.imageUrl} alt={testimonial.author.company} />
                                                        </a>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <blockquote className="text-gray-900">
                                                        <p className="openSansMedium">{testimonial.author.name}</p>
                                                            <p>{`“${testimonial.body}”`}</p>
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </figure>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
