import { getBlogBySlug, getAllPosts } from '../../lib/api';

import BlockContent from '@sanity/block-content-to-react';
import sanity from '../../lib/sanity';

import Nav from '../../components/layout/nav'
import Link from 'next/link'
import Head from 'next/head'
import moment from 'moment'
import React from 'react';


const serializers = {
    types: {
        code: (serializer) => {
            return <h1>Code Block</h1>
        }
    }
}

export default function BlogPostPage({ post }) {

    return (
        <>
            <Head>
                <title key="title">{post.title} | Blog | Credmark</title>
                <meta name="description" content={post.description} />
                <meta content={`${post.title} | Blog | Credmark`} property="og:title" key="og:title" />
                <meta content={`${post.title} | Blog | Credmark`} name="twitter:title" key="twitter:title" />
                <meta content={post.description} property="og:description" key="og:description" />
                <meta property="og:image" content={post.mainImage} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@credmarkhq" />
                <meta name="twitter:title" content={`${post.title} | Blog | Credmark`} />
                <meta name="twitter:description" content={post.description} />
                <meta name="twitter:image" content={post.mainImage} />
                <meta content={post.mainImage} name="twitter:image" key="twitter:image" />

                {post.mainImage && (
                    <>
                        <meta content={post.mainImage} property="og:image" key="og:image" />
                        <meta
                            content={post.mainImage}
                            property="og:image:secure_url"
                            key="og:image:secure_url"
                        />
                        <meta content={post.mainImage} name="twitter:image" key="twitter:image" />
                    </>
                )}
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
                    }}
                />
            </Head>
            <div className="nav">
                <Nav page={<BlogDetail post={post} />} />
            </div>
        </>
    )
}

const BlogDetail = ({ post }) => {
    const [showCopyModal, setShowCopyModal] = React.useState(false);

    const doCopy = React.useCallback(() => {
        setShowCopyModal(true);
        navigator.clipboard?.writeText(window.location.href);
        setTimeout(() => setShowCopyModal(false), 2000);
    }, []);
    return (
        <div className="bg-white pb-10">
            <div className="max-w-6xl block m-auto px-5 md:px-20">
                <h1 className="leading-snug pt-20 text-5xl pb-5 px-5 md:px-20">{post.title}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-20 pb-5">
                    <div>
                        <p className="text-pink credmark text-base float-left">{post.author}</p>
                        <svg className="mx-4 float-left" width="2" height="30" viewBox="0 0 2 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="2" height="30" fill="#DE1A60" />
                        </svg>
                        <p className="text-pink credmark text-base float-left">{moment(post.date).format('MM.DD.YYYY')}</p>
                    </div>
                    <span className="flex justify-start md:justify-end cursor-pointer" onClick={doCopy}>
                        <img className="flex justify-end m-0.5" width={24} id="blogPage" src="../assets/link.svg" alt="copy to clipboard" />
                    </span>
                    {showCopyModal && (
                        <div className="z-10 fixed inset-x-0 top-0 flex items-center justify-center">
                            <div className="relative w-full z-10 p-4 bg-pink text-white text-center">
                                Link copied
                            </div>
                            <div className="absolute inset-0 bg-gray-100 opacity-75"></div>
                        </div>
                    )}
                </div>
                <img className="px-5 md:px-20" id="blogPage" src={post.mainImage} />
                <BlockContent
                    className="blog text-left leading-loose pt-10 px-5 md:px-20"
                    serializers={serializers}
                    blocks={post.content}
                    {...sanity.config()}
                />
                <span onClick={doCopy}>
                    <img className="px-5 md:px-20 flex m-5 cursor-pointer" id="blogPage" src="../assets/link.svg" alt="copy to clipboard" />
                </span>
                <div className="flex">
                    <Link href="/blog" rel="noreferrer">
                        <p className="cursor-pointer font-bold pt-10 pb-5 px-5 md:px-20">Back to blog<img width={40} className="float-right pt-2 pl-5" src="../assets/arrow-right-2.svg" /></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const post = await getBlogBySlug(params.slug);
    return {
        props: { post }
    }
}

export async function getStaticPaths() {
    const posts = await getAllPosts();
    return {
        paths: posts?.map(posts => ({ params: { slug: posts.slug } })),
        fallback: false
    }
}
