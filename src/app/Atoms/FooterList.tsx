export const FooterList = ({ list }: { list: string[] }) => {
    return (
        <div>
            <ul className="flex flex-col gap-8">
                {list.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
};
