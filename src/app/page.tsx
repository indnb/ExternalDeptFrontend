"use client";
import { uselanguagestore } from "../store/languagechanger";
import "src/app/globals.css";
import { Footer } from "@/Organisms/Footer";
import { Main } from "@/Organisms/Main";
import { Registration } from "@/Organisms/Registration";

export default function Home() {
  return (
    <div>
      <Main />
      <Registration />
      <Footer />
    </div>
  );
}
