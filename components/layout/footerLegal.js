import * as React from 'react';
import Link from 'next/link';

const navigation = {
    projects: [
        {
            name: 'Credmark Terminal',
            href: 'https://app.credmark.com/',
        },
        {
            name: 'Credmark Wiki',
            href: 'https://docs.credmark.com/credmark-wiki/',
        },
        {   name: 'Reports', 
            href: '/reports',  
            },
    ],
    learn: [
        {
            name: 'Blog',
            href: '/blog',
        },
        {
            name: 'Media',
            href: '/media',
        },
        {   name: 'FAQ', 
            href: '/faq', 
        },
        {
            name: 'White Paper',
            href: 'https://docs.credmark.com/credmark/',
        },
        {
            name: 'Privacy Policy',
            href: '/legal/privacy-policy',
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
            name: 'Reddit',
            href: 'https://www.reddit.com/r/Credmark/',
            icon: (props) => (
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                    <title>Reddit icon</title
                    ><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"></path>
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
        {
            name: 'Medium',
            href: 'https://blog.credmark.com/',
            icon: (props) => (
                <svg fill="white" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23.9641 11.9998C23.9641 5.39771 18.604 0.0375977 12.0018 0.0375977H12.0013C5.39917 0.0375977 0.0390625 5.39771 0.0390625 11.9998C0.0390625 18.6019 5.39917 23.962 12.0013 23.962H12.0018C18.604 23.962 23.9641 18.6019 23.9641 11.9998ZM13.2027 11.9999C13.2027 14.9404 10.8351 17.3242 7.91472 17.3242C4.99431 17.3242 2.62656 14.9399 2.62656 11.9999C2.62656 9.05991 4.99412 6.67547 7.91472 6.67547C10.8353 6.67547 13.2027 9.0594 13.2027 11.9999ZM19.0038 11.9999C19.0038 14.7678 17.82 17.0124 16.3597 17.0124C14.8994 17.0124 13.7156 14.7678 13.7156 11.9999C13.7156 9.23204 14.8992 6.98733 16.3595 6.98733C17.8198 6.98733 19.0036 9.23133 19.0036 11.9999H19.0038ZM21.3766 11.9999C21.3766 14.4792 20.9603 16.4903 20.4467 16.4903C19.933 16.4903 19.5169 14.4798 19.5169 11.9999C19.5169 9.52004 19.9331 7.50947 20.4467 7.50947C20.9601 7.50947 21.3766 9.51985 21.3766 11.9999Z" fill="currentColor" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.99688 20.4999C1.99688 20.2248 1.77354 20.0015 1.49845 20.0015H1.49843C1.22334 20.0015 1 20.2248 1 20.4999C1 20.775 1.22334 20.9983 1.49843 20.9983H1.49845C1.77354 20.9983 1.99688 20.775 1.99688 20.4999ZM1.54848 20.4999C1.54848 20.6224 1.44984 20.7217 1.32815 20.7217C1.20647 20.7217 1.10781 20.6224 1.10781 20.4999C1.10781 20.3774 1.20646 20.278 1.32815 20.278C1.44984 20.278 1.54848 20.3774 1.54848 20.4999ZM1.7902 20.4999C1.7902 20.6152 1.74087 20.7088 1.68003 20.7088C1.61918 20.7088 1.56986 20.6152 1.56986 20.4999C1.56986 20.3846 1.61917 20.291 1.68002 20.291C1.74087 20.291 1.79019 20.3845 1.79019 20.4999H1.7902ZM1.88906 20.4999C1.88906 20.6032 1.87172 20.687 1.85032 20.687C1.82891 20.687 1.81158 20.6032 1.81158 20.4999C1.81158 20.3966 1.82892 20.3128 1.85032 20.3128C1.87171 20.3128 1.88906 20.3966 1.88906 20.4999Z" fill="currentColor" />
                </svg>

            ),
        },
    ],
}

export default function FooterLegal() {
    return (
        <footer className="footerBg" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-32 lg:px-8">
                <div className="xl:grid xl:grid-cols-3">
                    <div className="space-y-4 xl:col-span-1">
                        <div>
                            <img
                                className="h-auto flex justify-start mr-2 pt-1"
                                src="/../../assets/credmark-logo.svg"
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
                        <p className="text-base text-white">&copy; 2022 Credmark, Inc. All rights reserved.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-2 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2">
                            <div>
                            </div>
                            <div>
                                <h3 className="roboto text-2xl font-light text-white tracking-wider">Projects</h3>
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
                        </div>
                        <div className="md:grid md:grid-cols-2">
                            <div>
                                <h3 className="roboto text-2xl font-light text-white tracking-wider">Learn</h3>
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
                            <div className="mt-12 md:mt-0">
                                <h3 className="roboto text-2xl font-light text-white tracking-wider">About</h3>
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
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}