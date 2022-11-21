import { getBlogBySlug, getAllPosts } from '../../lib/api';

import BlockContent from '@sanity/block-content-to-react';
import sanity from '../../lib/sanity';

import Nav from '../../components/layout/navBlog'
import SyntaxHighlighter from 'react-syntax-highlighter';
import Head from 'next/head'
import moment from 'moment'
import Subscribe from '../../components/subscribe/subscribe';
import Footer from '../../components/layout/footer'
import React from 'react';


const serializers = {
    types: {
        code: (props) => {
            return (
                <div className="bg-black text-white p-7 rounded-md code">
                    <SyntaxHighlighter
                        useInlineStyles={false}
                        language={props.node.language}>
                        {props.node.code}
                    </SyntaxHighlighter>
                </div>
            )
        },
    },
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
                <BlogDetail post={post} />
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
        <>
            <Nav />
            <div className="bg-white pb-10 max-w-3xl mx-auto px-5 md:px-0">
                <div>
                    <h1 className="leading-snug text-black pt-10 md:pt-20 text-5xl pb-5">{post.title}</h1>
                    <h3 className="leading-snug text-black font-light text-3xl pb-5">{post.subtitle}</h3>
                    <div className="flex">
                        <div>
                            <p className="text-credmarkpurple text-base float-left pb-5">{post.author}</p>
                            <svg className="mx-4 float-left mt-2" width="2" height="15" viewBox="0 0 2 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="2" height="15" fill="#3B0065" />
                            </svg>
                            <p className="text-credmarkpurple text-base float-left">{moment(post.date).format('YYYY/MM/DD')}</p>
                        </div>
                    </div>
                    <img className="mb-10" id="blogPage" src={post.mainImage} />
                    <BlockContent
                        className="border-box border-2 rounded-md border-gray-300 p-4"
                        serializers={serializers}
                        blocks={post.border}
                        {...sanity.config()} />
                    <BlockContent
                        className="blog sanity-block text-left leading-loose"
                        serializers={serializers}
                        blocks={post.content}
                        {...sanity.config()} />
                    <span onClick={doCopy}>
                        <img className="pt-5 flex cursor-pointer" id="blogPage" src="../assets/link.svg" alt="copy to clipboard" />
                    </span>
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>
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
