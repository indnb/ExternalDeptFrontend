"use client"
import React from 'react'
import { CategoryData } from './category.data'
import { ItemCategoryHackathon } from '@/Atoms/ItemCategoryHackathon'
import { useLanguageStore } from '@/_store/LanguageChanger';
import { useInvalidWidgetStore } from '@/_store/InvalidWidget';

export const HackathonCategory = () => {
  const { language } = useLanguageStore();
  const { fontFamily, fontSize } = useInvalidWidgetStore()
  return (
    <div className={` mb-[62px] max-lg:mb-[23px]
${fontFamily ? "font-kyivSerif" : "font-kyivSans"} 
flex justify-center flex-col items-center  text-black `}>
      <h1 className={` max-lg:mb-[16px]  mb-[71px] w-[90vw] text-center
           ${fontSize ? "text-[60px] max-lg:text-[42px]" : "text-[48px] max-lg:text-[32px]"}   
       `}>
        {language == 'ua' ? "Категорії на хакатон" : "Category hackathon"} </h1>
      {CategoryData.map((elem, index) => (
        <ItemCategoryHackathon img={elem.img} name={elem.name} description={language == "ua" ? elem.description : elem.description_eng} key={index} />
      ))}
      <div className="w-[83vw] min-xl2:w-[1540px] border-t-2 border-black" ></div>

    </div>
  )
}
