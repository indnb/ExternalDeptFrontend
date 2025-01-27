"use client";
import Dyikt from "../../public/Logo.svg";

export const Headerimage = () => {
    return (
        <div>
            <img
                className="max-w-none w-auto h-[50px] md:h-[90px] object-contain"
                src={Dyikt.src}
            />
        </div>
    );
};
