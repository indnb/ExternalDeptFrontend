import { FooterTopPanel } from "@/Molecules/FooterTopPanel";

export const Footer = () => {
  return (
    <footer className="max-[850px]:h-[165px]  bg-[#203C8F] w-[100vw] h-[370px] flex items-center flex-col ">
      <FooterTopPanel />
      <div className="w-[93vw] mt-[12px] max-[850px]:text-[12px] text-[22px]">
        <h1 style={{ fontFamily: "Montserrat" }}
        >Політика конфіденційності</h1>
        <h1 style={{ fontFamily: "Montserrat" }}
        >© 2025 Відділ зовнішніх зв’язків ДУІКТ</h1>
      </div>
    </footer>
  );
};
