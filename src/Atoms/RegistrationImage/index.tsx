import RegistrationDyikt from "@/public/RegistrationDyikt.png";
import Image from "next/image";

export const RegistrationImage = () => {
  return <Image className={` flex text-center items-center self-center`} src={RegistrationDyikt.src} alt="" />;
};
