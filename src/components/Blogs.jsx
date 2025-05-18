import React from "react";
import { useState, useEffect } from "react";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    content: "",
    image: "",
    userid: "",
    email: "",
  });
  const [expandedBlog, setExpandedBlog] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("userEmail");
    const userid = localStorage.getItem("userid");

    const blogData = {
      ...formData,
      author: username,
      email: email,
      userid: userid,
    };

    console.log("Submitting Blog:", blogData);

    try {
      const response = await fetch("https://mern-blog-server-t3fr.onrender.com/post/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(
          "🎉 Blog created successfully!💜 Want to make updates? ✍️ Head to your dashboard and edit your blog anytime!"
        );
        console.log(result);
        // Clear form
        setFormData({
          title: "",
          category: "",
          author: "",
          content: "",
          image: "",
          userid: "",
          email: "",
        });
        setShowForm(false);
      } else {
        alert("Error creating blog: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // get all blogs
  useEffect(() => {
    fetch("https://mern-blog-server-t3fr.onrender.com/get/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  // search bar
  const fetchFilteredBlogs = (query) => {
    // Encode the query to be URL safe

    fetch(
      `https://mern-blog-server-t3fr.onrender.com/blogs?search=${encodeURIComponent(searchTerm)}`
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => {
        console.error("Error fetching filtered blogs:", err);
        setBlogs([]);
      });
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchFilteredBlogs(searchTerm);
  };

  return (
    <section id="blogs">
      <div className="lg:px-40 md:px-20 px-10 mt-10 pt-20 flex flex-col lg:flex-row md:flex-row pb-20">
        <div className="w-full lg:w-1/3 md:w-1/3">
          <div className=" h-24 w-24 border-2 border-gray-300 border-dashed  rounded-2xl flex items-center justify-center">
            <button
              onClick={() => setShowForm(!showForm)}
              className="group cursor-pointer outline-none hover:rotate-90 duration-300"
              title="Add New"
            >
              <svg
                className="stroke-gray-500 fill-none group-hover:fill-gray-400 group-active:stroke-gray-200 group-active:fill-gray-500 group-active:duration-0 duration-300"
                viewBox="0 0 24 24"
                height="50px"
                width="50px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeWidth="1.5"
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                ></path>
                <path strokeWidth="1.5" d="M8 12H16"></path>
                <path strokeWidth="1.5" d="M12 16V8"></path>
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-500 pt-2">
            Got something to say? Tap to write your blog
          </p>
        </div>

        <div className="w-full sm:w-5/6 md:w-2/3 pt-2 flex items-center justify-center mx-auto">
          {showForm && (
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-white rounded shadow flex  items-center justify-center   flex-col gap-3 w-full"
            >
              <input
                type="text"
                name="title"
                placeholder="Blog Title"
                value={formData.title}
                onChange={handleChange}
                required
                className="p-3 w-full rounded-sm border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-[#2e2ea3] hover:border-2 hover:border-[#2e2ea3]"
              />

              <input
                type="text"
                name="category"
                placeholder="Enter blog category (e.g., Food, Travel, Finance,..)"
                value={formData.category}
                onChange={handleChange}
                required
                className="p-3 w-full rounded-sm border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-[#2e2ea3] hover:border-2 hover:border-[#2e2ea3]"
              />

              <textarea
                name="content"
                placeholder="Write your blog..."
                value={formData.content}
                onChange={handleChange}
                required
                className="p-3 w-full rounded-sm border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-[#2e2ea3] hover:border-2 hover:border-[#2e2ea3]"
              />

              <input
                type="text"
                name="image"
                placeholder="Image URL (optional)"
                value={formData.image}
                onChange={handleChange}
                className="p-3 w-full rounded-sm border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-[#2e2ea3] hover:border-2 hover:border-[#2e2ea3]"
              />
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="mt-4 cursor-pointer group relative bg-white hover:bg-zinc-300 text-[#2e2ea3] font-semibold text-sm px-6 py-1 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-40 h-20 md:w-40 md:h-14"
                >
                  <div className="relative flex items-center justify-center gap-2">
                    <span className="relative inline-block overflow-hidden">
                      <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                        Share Your Voice
                      </span>
                      <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                        Publish It Now
                      </span>
                    </span>

                    <svg
                      className="w-6 h-8 transition-transform duration-200 group-hover:rotate-45"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        fill="currentColor"
                        r="11"
                        cy="12"
                        cx="12"
                      ></circle>
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        stroke="white"
                        d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <form
        onSubmit={handleSearchSubmit}
        className="mb-6 lg:px-40 md:px-20 px-10 flex lg:flex-row md:flex-row flex-col  gap-3"
      >
        <input
          type="text"
          placeholder="Search by category or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#2e2ea3]"
        />
        <button
          type="submit"
          className="cursor-pointer bg-[#4343ef] text-white px-6 py-2 rounded hover:bg-[#2e2ea3]"
        >
          Search
        </button>
        <button
          type="button"
          onClick={() => {
            setSearchTerm("");
            // Fetch all blogs again
            fetch("https://mern-blog-server-t3fr.onrender.com/getall/blogs")
              .then((res) => res.json())
              .then((data) => setBlogs(data));
          }}
          className="cursor-pointer bg-gray-500 text-white px-6 py-2 w-32 h-12  rounded hover:bg-gray-600"
        >
          Clear
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:px-40 md:px-20 px-10  mt-10 pt-10 pb-16 mb-10">
        {blogs.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">
            No blogs found...
          </p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="relative bg-cover bg-center rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-64 flex items-end"
              style={{
                backgroundImage: `url(${
                  blog.image ||
                  "https://arnifi.com/_next/static/media/Arnifi%20Primary%20Logo_Blue.8fc3f7c3.svg"
                })`,
              }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black opacity-70"></div>

              {/* Blog content */}
              <div className="relative z-10 p-5 text-white w-full">
                <h2 className="text-xl font-semibold mb-1">{blog.title}</h2>
                <p className="text-sm text-gray-300">
                  Category: {blog.category}
                </p>
                <p className="text-sm text-gray-300">By: {blog.author}</p>
                <p className="text-sm text-gray-300 mb-1">
                  {new Date(blog.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <p className="line-clamp-2 text-sm">{blog.content}</p>
                <button
                  onClick={() => setExpandedBlog(blog)}
                  className="cursor-pointer mt-4 px-4 py-2 bg-[#4343ef] hover:bg-[#2e2ea3]  text-white text-sm rounded-full transition"
                >
                  Continue Reading
                </button>
                {expandedBlog && (
                  <div className="fixed inset-0 bg-gray-400/30  flex items-center justify-center z-50">
                    <div className="relative bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-lg p-6">
                      {/* Close button */}
                      <button
                        onClick={() => setExpandedBlog(null)}
                        className="absolute top-3 right-4 text-gray-600 hover:text-red-700 text-xl font-bold"
                      >
                        ✖
                      </button>

                      {/* Blog content */}
                      <h2 className="text-2xl font-bold mb-2 text-purple-800">
                        {expandedBlog.title}
                      </h2>
                      <p className="text-sm text-gray-500 mb-3">
                        Category: {expandedBlog.category} | Author:{" "}
                        {expandedBlog.author} | Created at:{" "}
                        {expandedBlog.createdAt.slice(0, 10)}
                      </p>
                      <img
                        src={
                          expandedBlog.image ||
                          "https://arnifi.com/_next/static/media/Arnifi%20Primary%20Logo_Blue.8fc3f7c3.svg"
                        }
                        alt={expandedBlog.title}
                        className="w-full h-72 object-contain rounded mb-4"
                      />
                      <p className="text-gray-800 whitespace-pre-line">
                        {expandedBlog.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Blogs;
