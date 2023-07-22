import { Navigation } from "./navigation";

export default function Home() {
  const navlink = [
    {
      id: 1,
      name: "css",
      href: "/css",
    },
    {
      id: 2,
      name: "eee",
      href: "/eee",
    },
  ];
  return (
    <>
      <h1>UI page</h1>
      <Navigation navLinks={navlink}></Navigation>
    </>
  );
}
