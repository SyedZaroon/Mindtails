import React, { useState, useEffect } from "react";
import Slider from "../components/Slider";
import Sidebar from "../components/Sidebar";
import Postbox from "../components/Postbox";
import Trandingpost from "../components/Trandingpost";
import Hotnews from "../components/Hotnews";
import { Blog } from "../data/Blog";
import { shuffleArray } from "../utils";


function Home() {


  // State for shuffled posts
  const [posts, setPosts] = useState([]);


  // Shuffle posts once when component mounts
  useEffect(() => {
    setPosts(shuffleArray(Blog));
  }, []);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10; // Number of posts per page

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  const nextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Slider />

      <div className="flex gap-3 my-12">
        <div className="laptop:basis-[868px] basis-auto flex flex-col gap-5">
          {/* Display only current page posts */}
          {currentPosts.map((post) => (
            <Postbox key={post.id} slug={post.slug} image={post.image} title={post.title} />
          ))}

          {/* Pagination Controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
            >
              Previous
            </button>
            <span className="px-4 py-2 bg-gray-100 rounded">{currentPage}</span>
            <button
              onClick={nextPage}
              disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
              className={`px-4 py-2 border rounded ${currentPage === Math.ceil(posts.length / postsPerPage) ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
            >
              Next
            </button>
          </div>
        </div>

        <div className="basis-[350px] hidden laptop:block">
          <Sidebar />
        </div>
      </div>

      <div className="py-6 flex gap-4 sm:flex-wrap laptop:flex-nowrap">
        <Trandingpost />
        <Hotnews />
      </div>
    </div>
  );
}

export default Home;
