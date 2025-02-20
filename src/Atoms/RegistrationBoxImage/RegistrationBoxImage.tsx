import Image from "next/image";

interface RegistrationBoxImage {
  image: string;
}

export const RegistrationBoxImage: React.FC<RegistrationBoxImage> = ({ image }) => {
  console.log(image)
  return (
    <div>
      <Image className={`text-203C8F sm:h-[55px] sm:w-[55px] h-[25px] w-[25px]`} src={`${image}`} alt="" />
    </div>
  )
}
