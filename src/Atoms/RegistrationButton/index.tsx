type buttonProps = {
    title: string;
    width:string;
}

export const RegistrationButton: React.FC<buttonProps> = ({ title, width }) => {
    return (
        <button
            type="submit"
            style={{ width: `${width}px` }}
            className={`flex justify-center items-center self-center border-2 border-[#8D8D8D] text-[#8D8D8D] rounded-xl hover:bg-[#203C8F] hover:border-[#203C8F] hover:text-white transition h-12`}
        >
            {title}
        </button>
    );
};
