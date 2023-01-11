import { LinkProps } from "./Link";

type LinkListProps = {
    links: React.ReactElement<LinkProps>[];
    title: string;
};

export const LinkList = ({ links, title }: LinkListProps) => {
    return (
        <>
            <h3 className="text-md">{title}</h3>
            <ul className="text-sm">
                {links.map((link, index) => (
                    <li key={index}>{link}</li>
                ))}
            </ul>
        </>
    );
};
