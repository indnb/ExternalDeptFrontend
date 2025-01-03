"use client";
import { useLanguageStore } from "@/src/_store/LanguageChanger";
import React from "react";
import { data } from "./home.data";

export default function TestTextInHome() {
  const { language, changeLanguage } = useLanguageStore();
  const toggleLang = () => {
    changeLanguage(language === "ua" ? "eng" : "ua");
  };
console.log(process.env.API_PORT)
  return (
    <div>
      <h1>{data[language]}</h1>
      <h1 data-testid="text">{language}</h1>
      <button onClick={() => toggleLang()}>one up</button>
    </div>
  );
}
