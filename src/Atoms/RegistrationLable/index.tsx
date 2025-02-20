type LabelProps = {
    title: string;
};

export const RegistrationLable: React.FC<LabelProps> = ({ title }) => {
    return (
        <div
            style={{
                fontFamily: "'montserrat', sans-serif",
            }}
            className="text-[#6A6A6A] flex p-2  max-sm:text-sm justify-center">
            {title}
        </div>
    )
}

