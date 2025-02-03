"use client";
import "src/app/globals.css";
import { Main } from "@/Organisms/Main";
import { News } from "@/Organisms/News";
import {Registration } from "@/Organisms/Registration";

export default function Home() {


    return (
        <div className="bg-white">
            <div className="w-full flex flex-col gap-10 justify-center">
                <Main />
                <News />
                <Registration/>
            </div>
        </div>
    );
}
