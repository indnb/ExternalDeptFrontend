import { RegistrationBoxItem } from "@/Molecules/RegistrationBoxItem";
import { RegistrationBoxData } from "./RegistrationBox.data";

export const RegistrationBox = () => {
    return (
        <div className="w-full px-4  flex justify-center">
            <div className="w-full  grid grid-cols-2 md:grid-cols-2 gap-0 border border-black rounded-lg overflow-hidden ">
                {RegistrationBoxData.map((item, index) => (
                    <div
                        key={index}
                        className="border border-black flex flex-col text-center items-center "
                    >
                        <RegistrationBoxItem
                            image={item.image}
                            text={item.text}
                            label={item.label}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};