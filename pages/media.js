import Head from 'next/head'
import Media from '../components/pages/media'

import { getAllMediaPosts } from "../lib/api"
import { useGetMediaPosts } from '../actions'

export default function Home({posts: initialPosts}) {
  // 'posts' is pre-filled with posts cached when getStaticProps() was run during build time
  // then will be fetched fresh on client-side
  const { data: posts } = useGetMediaPosts(initialPosts);

  return (
    <>
      <Head>
        <title>Media and Crypto Reports | CREDMARK</title>
        <meta content="Media and Crypto Reports | Credmark" property="og:title" key="og:title" />
        <meta name="description" content="Check out our latest press articles and crypto credit reports." />
        <meta property="og:image" content="https://credmark.com/assets/credmark-og-image.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="nav">
        <Media posts={posts} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllMediaPosts();
  return {
      props: {
          posts
      },
  };
}