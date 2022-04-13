import MediaCard from "../media/mediaCard";
import moment from "moment";
import React from "react";
import Header from "../layout/header"
import Subscribe from "../subscribe/subscribe";
import Footer from "../layout/footer";

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
      <div>
        <Header
          title="Media"
          description="Featuring Credmark's latest press announcements" />
      </div>
      {<div className="px-5 max-w-6xl md:m-auto">
        <div className="pt-10 border-b-1 border-gray-700 block m-auto md:m-auto space-x-5 md:space-x-20">
              <button className="border-b-2 border-transparent hover:border-purple pb-5 pl-5" onClick={()=>{setSelectedCategory("all")}}>All</button>
              <button className="border-b-2 border-transparent hover:border-purple pb-5" onClick={()=>{setSelectedCategory("press")}}>Press</button>
              <button className="border-b-2 border-transparent hover:border-purple pb-5" onClick={()=>{setSelectedCategory("announcements")}}>Announcements</button>
              <button className="border-b-2 border-transparent hover:border-purple pb-5" onClick={()=>{setSelectedCategory("videos")}}>Videos</button>
              <button className="border-b-2 border-transparent hover:border-purple pb-5" onClick={()=>{setSelectedCategory("newsletter")}}>Newsletter</button>
          </div>
          </div>}
      <div className="block m-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-auto container-md pb-10">
          {filteredPosts.map((post) => (
                <MediaCard
                  key={post.slug}
                  link={post.url}
                  img={post.mainImage}
                  alt={post.mainImageAlt}
                  title={post.title}
                  description={post.subtitle}
                  date={moment(post.publishedAt).format('MM/DD/YYYY')}
                />
              ))}
        </div>
      </div>
      <Subscribe />
      <Footer />
    </main>
  );
}