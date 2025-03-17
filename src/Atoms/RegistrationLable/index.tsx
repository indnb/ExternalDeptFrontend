type LabelProps = {
  title: string;
};

export const RegistrationLable: React.FC<LabelProps> = ({ title }) => {
  return (
    <div
      style={{
        fontFamily: "'montserrat', sans-serif",
      }}
      className="max-[850xp]:text-[8.87px] max-[850xp]:mt-[-20px] text-[#6A6A6A] flex p-2  text-sm justify-center">
      {title}
    </div>
  )
}

