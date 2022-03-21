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
        <div className="bg-white pb-10 max-w-3xl mx-auto">
            <div>
                <h1 className="leading-snug pt-20 text-5xl pb-5 px-5 text-center">{post.title}</h1>
                <h3 className="leading-snug text-3xl pb-5 px-5 md:px-20 text-center">{post.subtitle}</h3>
                <div className="flex justify-center px-5 md:px-20">
                    <div>
                        <p className="text-pink credmark text-base float-left pb-5">{post.author}</p>
                        <svg className="mx-4 float-left" width="2" height="30" viewBox="0 0 2 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="2" height="30" fill="#DE1A60" />
                        </svg>
                        <p className="text-pink credmark text-base float-left">{moment(post.date).format('MM.DD.YYYY')}</p>
                    </div>
                </div>
                <img className="px-5 mb-10" id="blogPage" src={post.mainImage} />
                <BlockContent
                    className="border-box px-5 mx-5 border-2 rounded-md border-gray-300"
                    serializers={serializers}
                    blocks={post.border}
                    {...sanity.config()} 
                />
                <BlockContent
                    className="blog sanity-block text-left leading-loose px-5"
                    serializers={serializers}
                    blocks={post.content}
                    {...sanity.config()}
                />
                <span onClick={doCopy}>
                    <img className="px-5 flex m-5 cursor-pointer" id="blogPage" src="../assets/link.svg" alt="copy to clipboard" />
                </span>
                <div className="flex">
                    <Link href="/blog" rel="noreferrer">
                        <p className="cursor-pointer font-bold pt-10 pb-5 px-5 text-credmarkpurple">Back to blog<img width={40} className="float-right pt-2 pl-5" src="../assets/arrow-right-2.svg" /></p>
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
