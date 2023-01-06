export type LinkProps = {
  text: string;
  href: string;
};

export function Link({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      className="text-indigo-500 hover:text-white hover:bg-indigo-500 p-1 rounded-lg"
    >
      {text}
    </a>
  );
}
