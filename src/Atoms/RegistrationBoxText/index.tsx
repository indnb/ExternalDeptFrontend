interface RegistrationBoxTextProps {
    text: string;
}

export const RegistrationBoxText: React.FC<RegistrationBoxTextProps> = ({ text }) => {
    return (
        <div>
            <h1 className="text-[#203C8F]">{text}</h1>
        </div>
    );
};
