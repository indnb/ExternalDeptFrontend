interface RegistrationBoxLabel{
    label: string;
}

export const RegistrationBoxLabel:React.FC<RegistrationBoxLabel> = ({label})=>{
    return (
        <div className="text-black text-sm">
            {label}
        </div>
    )
}