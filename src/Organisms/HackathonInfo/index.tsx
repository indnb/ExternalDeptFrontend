'use client'
import React from 'react'
import { HackathonInfoPanelTop } from "@/Molecules/HackathonInfoPanelTop"
import { HackathonInfoPanelBottom } from "@/Molecules/HackathonInfoPanelBottom"
import { useLanguageStore } from "@/_store/LanguageChanger";

export const HackathonInfo = () => {
  const { language } = useLanguageStore();
  return (

    <div className='flex items-center flex-col max-lg:mb-[76px] mb-[155px]'>
      <HackathonInfoPanelTop firstRow={language == `ua` ? `ХАКА` : `HACK`} secondRow={language == `ua` ? `Хакатон – це інтенсивний марафон розробки, де команди працюють над створенням інноваційних рішень, поєднуючи креативність та сучасні технології.` : `Hackathon is an intensive development marathon where teams work to create innovative solutions, combining creativity and modern technologies.`} />
      <HackathonInfoPanelBottom firstRow={language == `ua` ? `Випробовуй свої навички, працюй у команді та втілюй ідеї в реальні проєкти. Створюй, змагайся, перемагай!` : `Test your skills, work in a team, and turn ideas into real projects. Create, compete, win!`} secondRow={language == `ua` ? `ТОН` : `ATHON`} />
    </div>
  )
}
