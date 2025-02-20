type TextProps = {
    title: string;
};


export const FooterText: React.FC<TextProps> = ({ title }) => {
        return (
            <div>
                <p className={`font-bold text-4xl`}>{title}</p>
            </div>
        )
}