import { FooterItem } from "@/Atoms/FooterItem";


export const FooterList = ({ list }: { list: string[] }) => {
    return (
        <div>
            <ul className="flex flex-col gap-8">
                {list.map((item: string, i: number) => (
                    <FooterItem key={i} item={item} />
                ))}
            </ul>
        </div>
    );
};
