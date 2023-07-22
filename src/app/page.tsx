import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>main Home page</h1>
      <Link href="/deshboard">Go to Dashboard</Link>
      <Link href="/blog">go Blog</Link>
    </>
  );
}
