type TextProps = {
    title: string;
};

export const RegistrationText: React.FC<TextProps> = ({ title }) => {
    return (
        <div>
            <p
                style={{
                    fontFamily: "'Kyiv Type Sans', sans-serif",
                }}
                className={`font-bold text-4xl flex text-black p-2 max-sm:text-xl justify-center`}>Реєстрація {title}</p>
        </div>
    )
}