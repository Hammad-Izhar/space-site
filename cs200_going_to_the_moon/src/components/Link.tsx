export type LinkProps = {
  text: string;
  href: string;
};

export function Link({ text, href }: { text: string; href: string }) {
  return <a href={href}>{text}</a>;
}
