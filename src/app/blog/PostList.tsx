import Link from "next/link";
interface propstyp {
  posts: {
    id: number;
    title: string;
    slug: string;
  }[];
}

export default function PostList({ posts }: propstyp) {
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
