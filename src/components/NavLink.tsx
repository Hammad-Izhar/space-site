type NavLinkProps = {
  title: string;
  img: string;
};

export const NavLink = ({ title, img }: NavLinkProps) => {
  const imgURL = new URL(`/src/assets/misc/${img}`, import.meta.url).href;

  // div styles
  const animationStyles = `transition-[background] duration-300`;
  const colorStyles = `bg-gradient-to-t via-neutral-800 bg-[size:100%_200%] hover:bg-[position:100%_100%]`;
  const gradientStyle = {
    "--tw-gradient-stops": "#646cff, #646cff 50%, #262626 50%, #262626",
  } as React.CSSProperties;

  // img styles
  const imgSizeStyles = img.toLowerCase().includes("saturn") ? "w-16" : "w-10";

  // The span is required! https://stackoverflow.com/questions/796087/make-a-div-into-a-link
  return (
    <div
      className={`flex flex-col justify-center items-center p-5 ${colorStyles} ${animationStyles} relative`}
      style={gradientStyle}
    >
      <img className={imgSizeStyles} src={imgURL} />
      <a href={`#${title}`} className={`font-orbitron uppercase p-4`}>
        {title}
        <span className="absolute top-0 left-0 w-full h-full z-10"></span>
      </a>
    </div>
  );
};
