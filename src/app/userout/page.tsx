"use client";

import { usePathname, useRouter } from "next/navigation";

const links = [
  {
    id: 1,
    name: "Jueal (EEE)",
    href: "/eee",
  },
  {
    id: 2,
    name: "Masum (CSS)",
    href: "/css",
  },
  {
    id: 1,
    name: "Kawsar (English)",
    href: "/english",
  },
];

export default function Page() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <div key={link.id} onClick={() => router.push(`/blog/${link.href}`)}>
            <h1 className={isActive ? "text-blue" : "text-black"}>
              {link.name}
            </h1>
          </div>
        );
      })}
    </>
    // <button type="button" onClick={() => router.push("/blog/eee")}>
    //   EEE
    // </button>
  );
}
