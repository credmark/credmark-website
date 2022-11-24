import MediaCard from "../media/mediaCard";
import moment from "moment";
import React from "react";
import Header from "../layout/header"
import Subscribe from "../subscribe/subscribe";
import Footer from "../layout/footer";
import Link from "next/link";

export default function Media({ posts }) {
  const [filteredPosts, setFilteredPosts] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  React.useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.category.slug.current === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <main>
      <div className="py-2 stickyCta text-center relative">
        <div>
            <Link href="/product?tokenApi=true#learnMore" rel="noreferrer"><p className="cursor-pointer text-white text-base flex justify-center flex-wrap"><span className="float-left pr-3">
            The only source of DeFi prices: our Token API. Simple. Powerful. Try it.</span><img className="hover:animate-pulse" src="../assets/arrow-white.svg" alt="Right arrow" /></p></Link>        
        </div>
      </div>
      <div className="bg-credmarkpurple heroBg w-screen">
      </div>
      <div>

        <Header
          title="Media"
          description="Featuring Credmark's latest press announcements" />
      </div>
      <div className="advisorBg">
        <div className="px-5 max-w-6xl md:m-auto">
          <div className="pt-10 md:pt-20 border-b-1 border-gray-700 block m-auto md:m-auto space-x-5 md:space-x-20">
            <button className="hover:text-green pb-3 pl-5" onClick={() => { setSelectedCategory("all") }}>All</button>
            <button className="hover:text-green pb-3" onClick={() => { setSelectedCategory("press") }}>Press</button>
            <button className="hover:text-green pb-3" onClick={() => { setSelectedCategory("announcements") }}>Announcements</button>
            <button className="hover:text-green pb-3" onClick={() => { setSelectedCategory("videos") }}>Videos</button>
            <button className="hover:text-green pb-5" onClick={() => { setSelectedCategory("newsletter") }}>Newsletter</button>
          </div>
        </div>
        <div className="block m-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto container-md pb-20 md:pb-40">
            {filteredPosts.map((post) => (
              <MediaCard
                key={post.slug}
                link={post.url}
                img={post.mainImage}
                alt={post.mainImageAlt}
                title={post.title}
                description={post.subtitle}
                date={moment(post.publishedAt).format('DD/MM/YYYY')}
              />
            ))}
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </main>
  );
}
