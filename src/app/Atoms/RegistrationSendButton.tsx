type buttonProps = {
    title: string;
}

export const RegistrationSendButton: React.FC<buttonProps>=({title})=>{
    return (
        <button type='submit' className='flex justify-center items-center self-center border-2 border-[#8D8D8D] text-[#8D8D8D] rounded-xl hover:bg-[#203C8F] hover:border-[#203C8F] hover:text-white transition h-12 w-96'>
            {title}
        </button>
    )
}