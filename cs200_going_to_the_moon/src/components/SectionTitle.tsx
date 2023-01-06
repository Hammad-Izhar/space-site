export function SectionTitle({ text }: { text: string }) {
  const rocketURL = new URL(`/src/assets/rocket.png`, import.meta.url).href;

  return (
    <div className="flex justify-center items-center">
      <img src={rocketURL} className="w-12 h-12" />
      <h2 className="text-center text-5xl font-bold m-4">{text}</h2>
      <img src={rocketURL} className="w-12 h-12" />
    </div>
  );
}
