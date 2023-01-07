import { LinkProps } from "./Link";

type LinkListProps = {
  links: React.ReactElement<LinkProps>[];
  title: string;
};

function LinkList({ links, title }: LinkListProps) {
  return (
    <>
      <h3 className="text-xl">{title}</h3>
      <ul className="text-lg">
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </>
  );
}

export default LinkList;