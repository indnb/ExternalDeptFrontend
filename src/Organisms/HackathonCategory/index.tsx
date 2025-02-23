import React from 'react'
import { CategoryData } from './category.data'
import { ItemCategoryHackathon } from '@/Atoms/ItemCategoryHackathon'
import { useLanguageStore } from '@/_store/LanguageChanger';
import { useInvalidWidgetStore } from '@/_store/InvalidWidget';

export const HackathonCategory = () => {
  const { language } = useLanguageStore();
  const { fontFamily } = useInvalidWidgetStore()
  return (
    <div className={` ${fontFamily ? "font-kyivSerif" : "font-kyivSans"} flex justify-center flex-col items-center  text-black `}>
      <h1 className='max-[850px]:text-[28px] max-[850px]:mb-[16px] text-[48px] mb-[71px]'>
        {language == 'ua' ? "Категорії на хакатон" : "Category hackathon"}
      </h1>
      {CategoryData.map((elem, index) => (
        <ItemCategoryHackathon img={elem.img} description={elem.description} key={index} />
      ))}
      <div className="w-[83vw] border-t-2 border-black" ></div>

    </div>
  )
}
