interface RegistrationBoxImage {
    image: string;
}

export const RegistrationBoxImage:React.FC<RegistrationBoxImage>=({image})=>{
    console.log(image)
    return (
        <div>
            <img className={`text-203C8F`} src={`${image}`} alt=""/>
        </div>
    )
}