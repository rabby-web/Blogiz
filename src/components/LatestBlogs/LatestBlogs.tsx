import React from "react";
import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-[90%] mx-auto ">
      <div>
        <h2 className="text-center text-4xl my-5 mt-10">
          Latest Blogs From <span className="text-accent">Blogiz</span>
        </h2>
        <p className="text-xl text-center text-gray-400 w-1/2 mx-auto">
          <i>
            Dive into the fascinating world of quantum computing, where
            unlocking unprecedented computational power.
          </i>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 my-10">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard blog={blog} key={blog.id}></LatestBlogCard>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-5 my-10">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard blog={blog} key={blog.id}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
