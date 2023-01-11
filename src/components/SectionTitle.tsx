import rocketURL from "/src/assets/imgs/rocket.png";

export const SectionTitle = ({ text }: { text: string }) => {
    return (
        <div className="flex justify-center items-center">
            <img src={rocketURL} className="w-12 h-12 invisible md:visible" />
            <h2 className="text-center text-4xl sm:text-md font-orbitron font-bold m-4">
                {text}
            </h2>
            <img src={rocketURL} className="w-12 h-12 invisible md:visible" />
        </div>
    );
};
