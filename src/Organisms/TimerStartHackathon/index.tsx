import React, { useEffect, useState } from 'react'

export const TimerStartHackathon = () => {
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    interval = setInterval(() => {
      setSecond((prev) => {
        if (prev === 59) {
          setMinute((m) => {
            if (m === 59) {
              setHour((h) => h + 1);
              return 0;
            }
            return m + 1;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : `${time}`;
  };
  return (
    <div className='max-[850px]:h-[60px] h-[146px]  w-[100vw] flex items-end justify-center'>
      <div className=' text-[#203C8F] h-[84px] w-[582px] text-[32px] max-[850px]:h-[41px] border-2 border-[#203C8F] rounded-[8px] max-[850px]:w-[284px] max-[850px]:text-[16px] flex items-center justify-center'>
        Дата проведення:{formatTime(hour)}.{formatTime(minute)}.{formatTime(second)}
      </div>
    </div>
  )
}
