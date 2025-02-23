import React from 'react'
import { HackathonInfoPanelTop } from "@/Molecules/HackathonInfoPanelTop"
import { HackathonInfoPanelBottom } from "@/Molecules/HackathonInfoPanelBottom"

export const HackathonInfo = () => {
  return (
    <div className='flex items-center flex-col'>
      <HackathonInfoPanelTop firstRow='ХАКА' secondRow="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
      <HackathonInfoPanelBottom firstRow="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. " secondRow="ТОН" />

    </div>
  )
}
