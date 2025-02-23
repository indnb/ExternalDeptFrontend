"use client";
import "src/app/globals.css";
import { AboutUs } from "@/Organisms/AboutUs";
import { Main } from "@/Organisms/Main";
import { Registration } from "@/Organisms/Registration";
import { InvalidWidget } from "@/Organisms/InvalidWidget";
import { HackathonInfo } from "@/Organisms/HackathonInfo"
import { HackathonCategory } from "@/Organisms/HackathonCategory";
import { TimerStartHackathon } from "@/Organisms/TimerStartHackathon";
export default function Home() {
  return (
    <div className="bg-[white] ">
      <div className={`w-full flex flex-col gap-10 justify-center`}>
        <InvalidWidget />
        <Main />
        <AboutUs />
        <HackathonInfo />
        <HackathonCategory />
        <TimerStartHackathon />
        <Registration />
      </div>
    </div>
  );
}
