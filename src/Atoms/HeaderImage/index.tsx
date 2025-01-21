"use client";
import Dyikt from "../../public/Dyiktwhite.png";

export const Headerimage = () => {
    return (
        <div>
            <img
                className="max-w-none w-auto h-[50px] md:h-[111px] object-contain"
                src={Dyikt.src}
            />
        </div>
    );
};
