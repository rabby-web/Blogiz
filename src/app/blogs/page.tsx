"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";
import React from "react";

const BlogPage = () => {
  // const res = await fetch("http://localhost:5000/blogs", {
  //   cache: "no-store",
  // });
  // const blogs = await res.json();
  const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");
  // console.log(data);
  return (
    <div className="w-[90%] mx-auto ">
      <div>
        <h2 className="text-center text-4xl my-5 mt-10">
          All Blogs From <span className="text-accent">Blogiz</span>
        </h2>
        <p className="text-xl text-center text-gray-400 w-1/2 mx-auto">
          <i>
            Dive into the fascinating world of quantum computing, where
            unlocking unprecedented computational power.
          </i>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 my-10">
        {blogs?.map((blog: Blog) => (
          <BlogCard blog={blog} key={blog.id}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
