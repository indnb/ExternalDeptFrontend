import RegistrationDyikt from "@/public/RegistrationDyikt.png";
import Image from "next/image";

export const RegistrationImage = () => {
  return <Image height={20} width={20} className={` flex text-center items-center self-center`} src={RegistrationDyikt.src} alt="" />;
};
