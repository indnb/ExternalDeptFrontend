"use client";
import { useLanguageStore } from "../store/LanguageChanger";
import "src/app/globals.css";
import { Footer } from "@/Organisms/Footer";
import { Registration } from "@/Organisms/Registration";

export default function Home() {
  return (
    <div>
      <h1
        style={{
          fontFamily:
            "'Kharkiv Tone', 'Kyiv Type Sans', 'Montserrat', sans-serif",
        }}
      >
      </h1>
      <Registration />
      <Footer />
    </div>
  );
}
