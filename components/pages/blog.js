import { getAllPosts } from "../../lib/api"
import BlogCard from '../blog/blogCard'


export default function Blog({ posts }) {
    return (
        <div className="py-16 px-5">
            <div className="text-center">
                <h1 className="text-5xl">BLOG</h1>
                <p>News, stories, and announcements from the Credmark team.</p>
                <p className="text-pink pb-5 hover:underline">Subscribe</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 pb-10">
                {posts.map(posts =>
                    <props key={posts.id} sm="4">
                        <BlogCard
                            title={posts.title}
                            date={posts.date}
                            img={posts.mainImage}
                            author={posts.author}
                            slug={posts.slug}
                            link={{
                                href: `/blog/${posts.slug}`
                            }}
                        />
                    </props>
                )
                }
            </div>
        </div>
    )
}

// this function is called during build time (always called on the server)
//provides props to the page
export async function getStaticProps() {
    const posts = await getAllPosts()
    return {
        props: {
            posts
        }
    }
}