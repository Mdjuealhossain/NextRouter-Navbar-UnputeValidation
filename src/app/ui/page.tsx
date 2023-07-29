import { Navigation } from "./navigation";
import "./style.css";

export default function Home() {
  const navlink = [
    {
      id: 1,
      name: "CSS",
      href: "/css",
    },
    {
      id: 2,
      name: "EEE",
      href: "/eee",
    },
    {
      id: 3,
      name: "English",
      href: "/english",
    },
  ];
  return (
    <>
      <h1>UI page</h1>
      <Navigation navLinks={navlink}></Navigation>
    </>
  );
}
