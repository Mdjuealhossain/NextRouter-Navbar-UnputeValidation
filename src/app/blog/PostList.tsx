"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface propstyp {
  posts: {
    id: number;
    title: string;
    slug: string;
  }[];
}

export default function PostList({ posts }: propstyp) {
  const pathname = usePathname();
  return (
    <ul>
      {posts.map((post: any) => {
        const isActive = pathname.startsWith(post.slug);
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <button className={isActive ? "text-blue" : "text-black"}>
                {post.title}
              </button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
