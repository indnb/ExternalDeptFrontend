type LabelProps = {
    title: string;
};

export const FooterLabel: React.FC<LabelProps> = ({ title }) => {
    return (
        <div className="text-white">
            {title}
        </div>
    )
}

