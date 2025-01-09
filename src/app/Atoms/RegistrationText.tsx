type TextProps = {
    title: string;
};

export const RegistrationText: React.FC<TextProps> = ({ title }) => {
    return (
        <div>
            <p className={`font-bold text-4xl text-black p-2`}>{title}</p>
        </div>
    )
}