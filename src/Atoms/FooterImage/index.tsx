import FooterDyikt from "@/public/FooterDyikt.png";
import Image from "next/image";

export const FooterImage = () => {
  return <Image className={`w-[350px} h-[170px] `} src={FooterDyikt.src} alt="" />;
};
