import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import ZodScemaFormValidation from "@/Wigets/ZodScemaFormValidation";
import FormValidation from "@/Wigets/FormValidation";

export default function Home() {
  return (
    <div style={{ gap: "50px", display: "flex", flexDirection: "column" }}>
      <ZodScemaFormValidation />
      <FormValidation />
    </div>
  );
}
