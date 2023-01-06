export type LinkProps = {
  text: string;
  href: string;
};

export function Link({ text, href }: { text: string; href: string }) {
  return (
    <a href={href} className="text-indigo-500 hover:text-indigo-600">
      {text}
    </a>
  );
}
