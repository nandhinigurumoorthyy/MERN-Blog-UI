import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import pos from "../assets/poster3.jpg";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const email = localStorage.getItem("userEmail");
  const username = localStorage.getItem("username");
  const userid = localStorage.getItem("userid");
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [editingBlogId, setEditingBlogId] = useState(null);

  // handle display blog - particular user
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const blogsResponse = await axios.get(
          "https://mern-blog-server-t3fr.onrender.com/get/user/blogs",
          { params: { email } }
        );
        setBlogs(blogsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    if (email) {
      fetchData();
    }
  }, [email]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("userid");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  // Handle delete
  const handleDeleteBlog = async (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog??🥺")) {
      try {
        await axios.delete(`https://mern-blog-server-t3fr.onrender.com/delete/blogs/${blogId}`);
        setBlogs((prev) => prev.filter((blog) => blog._id !== blogId));
        alert("🚮 Blog binned! Onward to brighter stories...");
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("Failed to delete blog.");
      }
    }
  };

  // Handle edit button
  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setEditingBlogId(blog._id);
  };

  // Handle form submission
  const handleEditBlogSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://mern-blog-server-t3fr.onrender.com/put/blogs/${editingBlog._id}`,
        editingBlog
      );
      setBlogs((prev) =>
        prev.map((b) => (b._id === editingBlog._id ? response.data : b))
      );
      setEditingBlog(null);
     alert("🎉 Blog polished and published! Your edits are live. ✨");
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update blog.");
    }
  };

  return (
    <>
      <NavBar />
      <div className=" min-h-screen lg:px-40 md:px-20 px-10  pt-10 mb-10 pb-15">
        <div className="">
          <div className="pl-4 pr-4 sm:pl-6 sm:pr-4 md:pl-14 md:pr-14 lg:pl-14 lg:pr-14">
            {/* User Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
             
                <p className="text-lg  pl-6 text-gray-700">
                  Welcome to your dashboard,
                  <span className="font-bold text-2xl uppercase roboto-serif-regular"> {username}</span>
                </p>
      
              {/* Logout Section */}
              <div>
                <button
                  onClick={handleLogout}
                  className="group flex items-center justify-start w-11 h-11 bg-[#2e2ea3] rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
                >
                  <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                    <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                      <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                    </svg>
                  </div>
                  <div className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    Logout
                  </div>
                </button>
              </div>
            </div>

            {/* Blogs Section */}
            <div className="mt-10">
              <h2 className="text-xl sm:text-2xl font-semibold mb-7">
                Your Blogbook 📖
              </h2>
              {loading ? (
                <p className="text-gray-800">Loading blogs...</p>
              ) : blogs.length > 0 ? (
                <ul className="space-y-10">
                  {blogs.map((blog) => {
                    const blogDate = new Date(blog.createdAt);

                    return (
                      <li
                        key={blog._id}
                        className="p-5 rounded-lg shadow-md bg-white border border-gray-200"
                      >
                        {/* Blog Image */}
                        <div className="w-full h-48 mb-4 rounded-md overflow-hidden">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <h3 className="text-2xl font-semibold text-purple-800 mb-2">
                          {blog.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-1">
                          <span className="font-medium">Category:</span>{" "}
                          {blog.category}
                          {" | "}
                          <span className="font-medium">Author:</span>{" "}
                          {blog.author}
                          {" | "}
                          {blogDate.toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>

                        <p className="text-gray-700 line-clamp-3 mb-3">
                          {blog.content}
                        </p>

                        <div className="flex gap-6">
                          <button
                            onClick={() => handleEditBlog(blog)}
                            className="relative lg:px-8 lg:py-2 md:px-8 md:py-2 px-3 py-2 rounded-md border-2 border-[#2e2ea3] bg-white text-[#2e2ea3] font-medium overflow-hidden cursor-pointer transition duration-300 z-10 hover:text-white
before:content-[''] before:absolute before:inset-0 before:bg-[#2e2ea3] before:scale-0 hover:before:scale-150 before:rounded-full before:transition-transform before:duration-700 before:z-[-1]"
                          >
                            Edit 📝
                          </button>

                          <button
                            onClick={() => handleDeleteBlog(blog._id)}
                            className="relative lg:px-8 lg:py-2 md:px-8 md:py-2 px-3 py-2 rounded-md border-2 border-[#2e2ea3] bg-white text-[#2e2ea3] font-medium overflow-hidden cursor-pointer transition duration-300 z-10 hover:text-white
before:content-[''] before:absolute before:inset-0 before:bg-[#2e2ea3] before:scale-0 hover:before:scale-150 before:rounded-full before:transition-transform before:duration-700 before:z-[-1]"
                          >
                            Delete 🗑
                          </button>
                        </div>

                        {/* Edit Form */}
                        {editingBlogId === blog._id && editingBlog && (
                          <div className="mt-10 p-6 border border-gray-300 rounded-lg bg-gray-50">
                            <h3 className="text-xl font-bold mb-4">
                              Edit Blog
                            </h3>
                            <form
                              onSubmit={handleEditBlogSubmit}
                              className="space-y-4"
                            >
                              <input
                                type="text"
                                placeholder="Title"
                                className="w-full border px-3 py-2 rounded"
                                value={editingBlog.title}
                                onChange={(e) =>
                                  setEditingBlog({
                                    ...editingBlog,
                                    title: e.target.value,
                                  })
                                }
                                required
                              />
                              <input
                                type="text"
                                placeholder="Image URL"
                                className="w-full border px-3 py-2 rounded"
                                value={editingBlog.image}
                                onChange={(e) =>
                                  setEditingBlog({
                                    ...editingBlog,
                                    image: e.target.value,
                                  })
                                }
                                required
                              />
                              <input
                                type="text"
                                placeholder="Category"
                                className="w-full border px-3 py-2 rounded"
                                value={editingBlog.category}
                                onChange={(e) =>
                                  setEditingBlog({
                                    ...editingBlog,
                                    category: e.target.value,
                                  })
                                }
                                required
                              />
                              <textarea
                                placeholder="Content"
                                rows="5"
                                className="w-full border px-3 py-2 rounded"
                                value={editingBlog.content}
                                onChange={(e) =>
                                  setEditingBlog({
                                    ...editingBlog,
                                    content: e.target.value,
                                  })
                                }
                                required
                              />
                              <div className="flex lg:flex-row md:flex-row flex-col gap-4">
                                <button
                                  type="submit"
                                  className="bg-[#4343ef] cursor-pointer text-white px-6 py-2 rounded hover:bg-[#2e2ea3]"
                                >
                                  Save Changes
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setEditingBlog(null)}
                                  className="bg-gray-500 cursor-pointer text-white px-6 py-2 rounded hover:bg-gray-600"
                                >
                                  Cancel
                                </button>
                              </div>
                            </form>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p>Nothing here... yet. Start writing your first blog 📝</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
