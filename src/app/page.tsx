"use client";
import "src/app/globals.css";
import { AboutUs } from "@/Organisms/AboutUs";
import { Main } from "@/Organisms/Main";
import { News } from "@/Organisms/News";
import {Registration } from "@/Organisms/Registration";

export default function Home() {


  return (
    <div className="bg-[#F6F6F6] ">
      <div className={`w-full flex flex-col gap-10 justify-center`}>
        <Main />
        <News />
        <AboutUs />
        <Registration/>
      </div>
    </div>
  );
}
