"use client"
import { useInvalidWidgetStore } from '@/_store/InvalidWidget';
import { useLanguageStore } from '@/_store/LanguageChanger';
import React, { useEffect, useState } from 'react'

export const TimerStartHackathon = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const { contrast, fontFamily, fontSize } = useInvalidWidgetStore();
  const { language } = useLanguageStore()
  useEffect(() => {
    const targetDate = new Date("2025-05-06T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const remainingTime = targetDate - now;

      if (remainingTime <= 0) {
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(remainingTime);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  return (
    <div className={`max-lg:h-[60px] ${fontFamily ? "" : "font-montserrat"} h-[146px]  w-[100vw] flex items-end justify-center`}>
      <div className={` ${contrast ? " text-[#414141] border-[#414141]" : "text-[#203C8F] border-[#203C8F]"}  h-[84px] w-[582px] 
${fontSize ? "text-[34px] max-lg:text-[18px]" : "text-[32px] max-lg:text-[16px]"}
 max-lg:h-[41px] border-2  rounded-[8px] max-lg:w-[284px]  flex items-center justify-center`}>
        {language == "ua" ? "Дата проведення" : "Date of conduction"}: {formatTime(days)}.{formatTime(hours)}.{formatTime(minutes)}.{formatTime(seconds)}
      </div>
    </div>
  )
}
