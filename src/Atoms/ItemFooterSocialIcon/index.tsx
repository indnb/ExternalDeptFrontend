import Image from "next/image"
import Link from "next/link"
import React from "react"

export interface IItemFooterSocailIcon {
  img: string;
  link: string
}

export const ItemFooterSocailIcon: React.FC<IItemFooterSocailIcon> = ({ img, link }) => {
  return (
    <Link href={link} className="h-[91px] w-[91px] max-[850px]:w-[30px] max-[850px]:h-[30px]" >
      <Image src={img} alt="" className="h-[91px] w-[91px] max-[850px]:w-[30px] max-[850px]:h-[30px]" />
    </Link>

  )
}

