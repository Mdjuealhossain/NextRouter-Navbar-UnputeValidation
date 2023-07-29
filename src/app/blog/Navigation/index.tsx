import Link from "next/link";
import React from "react";

interface propstyp {
  posts: {
    id: number;
    name: string;
    slug: string;
  }[];
}

const BlogNavigation = ({ posts }: propstyp) => {
  return (
    <div className="nav-div">
      <img
        src="https://www.shutterstock.com/shutterstock/photos/1262757361/display_1500/stock-photo-ict-information-and-communication-technology-concept-on-virtual-screen-1262757361.jpg"
        height="40px"
        width="40px"
      ></img>
      <div className="nav-div2">
        <Link href="/" className="nav-link">
          Home
        </Link>
        {posts.map((post) => {
          return (
            <nav key={post.id} className="nav">
              <Link href={`/blog/${post.slug}`} className="nav-link">
                {post.name}
              </Link>
            </nav>
          );
        })}
      </div>
      <button className="btn">Go here in click</button>
    </div>
  );
};

export default BlogNavigation;
