type TextProps = {
  title: string;
};

export const RegistrationText: React.FC<TextProps> = ({ title }) => {
  return (
    <div>
      <p
        style={{
          fontFamily: "Kyiv Type Sans",
        }}
        className={`font-normal text-[48px] max-[850px]:text-[28px] flex text-black p-2  justify-center`}>Реєстрація {title}</p>
    </div>
  )
}
