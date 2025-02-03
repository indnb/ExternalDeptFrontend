interface RegistrationBoxTextProps {
    text: string;
}

export const RegistrationBoxText: React.FC<RegistrationBoxTextProps> = ({ text }) => {
    return (
        <div>
            <h1 className="text-[#203C8F] text-[12px] sm:text-[28px]">{text}</h1>
        </div>
    );
};
