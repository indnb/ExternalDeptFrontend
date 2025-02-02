interface RegistrationBoxLabel{
    label: string;
}

export const RegistrationBoxLabel:React.FC<RegistrationBoxLabel> = ({label})=>{
    return (
        <div className="text-black text-[10px] sm:w-60 sm:text-[20px]">
            {label}
        </div>
    )
}