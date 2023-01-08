type NavLinkProps = {
  title: string;
};

export const NavLink = ({ title }: NavLinkProps) => {
  const textStyles = `font-orbitron uppercase`;
  const positionStyles = `flex justify-center p-5`;
  const animationStyles = `transition-[background] duration-300`;
  const colorStyles = `bg-gradient-to-t via-neutral-800 bg-[size:100%_200%] hover:bg-[position:100%_100%]`;

  return (
    <a
      href={`#${title}`}
      className={`${textStyles} ${positionStyles} ${animationStyles} ${colorStyles}`}
      style={
        {
          "--tw-gradient-stops": "#646cff, #646cff 50%, #262626 50%, #262626",
        } as React.CSSProperties
      }
    >
      {title}
    </a>
  );
};
