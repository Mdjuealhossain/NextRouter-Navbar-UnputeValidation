import BlogNavigation from "./Navigation";

const posts = [
  {
    id: 1,
    name: "CSS",
    slug: "/css",
  },
  {
    id: 2,
    name: "EEE",
    slug: "/eee",
  },
];

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <BlogNavigation posts={posts}></BlogNavigation>

      {children}
    </section>
  );
}
