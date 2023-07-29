import Link from "next/link";
import PostList from "./PostList";
import "./style.css";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "css",
      slug: "/css",
    },
    {
      id: 2,
      title: "eee",
      slug: "/eee",
    },
  ];
  return (
    <>
      <h1>Blog page</h1>
      <PostList posts={posts}></PostList>
    </>
  );
}
