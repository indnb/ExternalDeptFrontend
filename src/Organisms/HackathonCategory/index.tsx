import React from 'react'
import { CategoryData } from './category.data'
import { ItemCategoryHackathon } from '@/Atoms/ItemCategoryHackathon'
import { useLanguageStore } from '@/_store/LanguageChanger';

export const HackathonCategory = () => {
  const { language } = useLanguageStore();

  return (
    <div className='flex justify-center flex-col items-center  text-black '>
      <h1 style={{ fontFamily: "Kyiv Type Sans" }} className='max-[850px]:text-[28px] max-[850px]:mb-[16px] text-[48px] mb-[71px]'>
        {language == 'ua' ? "Категорії на хакатон" : "Category hackathon"}
      </h1>
      {CategoryData.map((elem, index) => (
        <ItemCategoryHackathon img={elem.img} description={elem.description} key={index} />
      ))}
      <div className="w-[83vw] border-t-2 border-black" ></div>

    </div>
  )
}
