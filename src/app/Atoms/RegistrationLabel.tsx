type LabelProps = {
    title: string;
};

export const RegistrationLabel: React.FC<LabelProps> = ({ title }) => {
    return (
        <div className="text-[#6A6A6A] p-2">
            {title}
        </div>
    )
}

