import "src/app/globals.css";
import { AboutUs } from "@/Organisms/AboutUs";
import { Registration } from "@/Organisms/Registration";
import { InvalidWidget } from "@/Organisms/InvalidWidget";
import { HackathonInfo } from "@/Organisms/HackathonInfo"
import { HackathonCategory } from "@/Organisms/HackathonCategory";
import { TimerStartHackathon } from "@/Organisms/TimerStartHackathon";
import { MainSecondVariant } from "@/Organisms/MainSeondVariant";
export default function Home() {
  return (
    <div className="bg-[white] ">

      <div className={`w-full flex flex-col gap-10 justify-center overflow-x-hidden`}>
        <InvalidWidget />
        <MainSecondVariant />
        <AboutUs />
        <HackathonInfo />
        <HackathonCategory />
        <TimerStartHackathon />
        <Registration />
      </div>
    </div>
  );
}
