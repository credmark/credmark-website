import * as React from 'react';

const navigation = {
    support: [
        {
            name: 'Status',
            href: 'https://status.credmark.com/',
        },
        {
            name: 'Contact us',
            href: '/contact-us',
        },

    ],
    projects: [
        {
            name: 'All Products',
            href: '/product/?tokenApi=true',
        },
        {
            name: 'Token API',
            href: '/product/?tokenApi=true#learnMore',
        },
        {
            name: 'Portfolio API',
            href: '/product/?portfolioApi=true#learnMore',
        },
        {
            name: 'DeFi API',
            href: '/product/?defiApi=true#learnMore',
        },
        {
            name: 'Raw Data',
            href: '/product/?rawData=true#learnMore',
        },
    ],
    
    documentation: [
        {
            name: 'All',
            href: 'https://docs.credmark.com/technical-docs/',
        },
        {
            name: 'API Basics',
            href: 'https://docs.credmark.com/api-how-to-guide/account-setup/initial-sign-up',
        },
        {
            name: 'Token API Concepts',
            href: 'https://docs.credmark.com/token-api-concepts/basics/introduction',
        },
        {
            name: 'Token API Reference',
            href: 'https://gateway.credmark.com/api/#/Token%20API',
        },
        {
            name: 'DeFi API Concepts',
            href: 'https://docs.credmark.com/defi-api-concepts',
        },
        {
            name: 'DeFi API Reference',
            href: 'https://gateway.credmark.com/api/#/DeFi%20API',
        },
        {
            name: 'Model Development Concepts',
            href: 'https://docs.credmark.com/cmf-model-guide/',
        },
        {
            name: 'Model Reference',
            href: 'https://gateway.credmark.com/model-docs',
        },
        {
            name: 'Framework Reference',
            href: 'https://developer-docs.credmark.com/en/latest/',
        },
    ],
    
   learn: [
        {
            name: 'FAQ',
            href: '/faq',
        },
        {
            name: 'Credmark Wiki',
            href: 'https://docs.credmark.com/credmark-wiki/',
        },
        {
            name: 'Blog',
            href: '/blog',
        },
        {
            name: 'Reports',
            href: '/reports',
        },
        {
            name: 'Media',
            href: '/media',
        },
        {
            name: 'White Paper',
            href: 'https://docs.credmark.com/credmark/',
        },
    ],
    
    community: [
        {
            name: 'Careers',
            href: '/careers',
        },
        {
            name: 'About us',
            href: '/contributors',
        },
        {
            name: 'Community',
            href: 'https://discord.com/invite/3dSfMqP3d4',
        },
    ],
    social: [
        {
            name: 'Discord',
            href: 'https://discord.com/invite/3dSfMqP3d4',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                    <title>Discord icon</title>
                    <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"></path></svg>
            ),
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/credmarkhq',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
        },
        {
            name: 'Telegram',
            href: 'https://t.me/credmark',
            icon: (props) => (
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
                    <title>Telegram icon</title><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"></path>
                </svg>
            ),
        },
        {
            name: 'Youtube',
            href: 'https://www.youtube.com/channel/UCdmImsISNfkXTxJPkmCnVNg',
            icon: (props) => (
                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
                    <title>YouTube icon</title>
                    <path d="M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"></path>
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/credmark',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

export default function Footer() {
    return (
        <footer className="footerBg" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-0">
                <div className="xl:grid xl:grid-cols-3">
                    <div className="space-y-4 xl:col-span-1">
                        <div>
                            <img
                                className="h-auto flex justify-start mr-2 pt-1"
                                src="../assets/credmark-logo.svg"
                                alt="Credmark logo"
                            />
                        </div>
                        <div className="flex space-x-6">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-white" target="_blank" rel="noreferrer">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                        <p className="text-base text-white">&copy; 2023 Credmark Labs, Inc. All rights reserved.</p>
                    </div>
                    <div className="mt-12 xl:mt-0">
                        <div className="grid grid-cols-1 lg:flex lg:space-x-10">
                        <div>
                                <h4 className="text-xl font-light text-white tracking-wider">Products</h4>
                                <ul role="list" className="mt-4 space-y-4 pl-0">
                                    {navigation.projects.map((item) => (
                                        <li className="list-none" key={item.name}>
                                            <a href={item.href} className="text-base text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h4 className="text-xl font-light text-white tracking-wider">Documentation</h4>
                                <ul role="list" className="mt-4 space-y-4 pl-0">
                                    {navigation.documentation.map((item) => (
                                        <li className="list-none" key={item.name}>
                                            <a href={item.href} className="text-base text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        
                            <div>
                                <h4 className="text-xl font-light text-white tracking-wider">Resources</h4>
                                <ul role="list" className="mt-4 space-y-4 pl-0">
                                    {navigation.learn.map((item) => (
                                        <li className="list-none" key={item.name}>
                                            <a href={item.href} className="text-base text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-light text-white tracking-wider">About</h4>
                                <ul role="list" className="mt-4 space-y-4 pl-0">
                                    {navigation.community.map((item) => (
                                        <li className="list-none" key={item.name}>
                                            <a href={item.href} className="text-base text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-light text-white tracking-wider">Support</h4>
                                <ul role="list" className="mt-4 space-y-4 pl-0">
                                    {navigation.support.map((item) => (
                                        <li className="list-none" key={item.name}>
                                            <a href={item.href} className="text-base text-white">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}