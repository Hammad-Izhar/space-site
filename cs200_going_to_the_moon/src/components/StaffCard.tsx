import { Person } from "../data/types";

type StaffCardProps = {
  person: Person;
};

function StaffCard({ person }: StaffCardProps) {
  const { name, pronouns, hometown, about, image } = person;
  const imageURL = new URL(`/src/assets/${image}`, import.meta.url).href;

  return (
    <div className="flex bg-neutral-700 w-4/5 max-w-xs flex-col items-center p-4 text-center rounded-xl m-3">
      <img
        src={imageURL}
        className="w-48 h-48 rounded-full border-white border-solid border-4 m-3"
      />
      <h2 className="text-3xl font-bold after:block after:h-px after:w-11/12 after:bg-neutral-400 after:m-3">
        {name}
      </h2>
      <p>{`Hometown: ${hometown}`}</p>
      <p>{`(${pronouns})`}</p>
      <p>{about}</p>
    </div>
  );
}

export default StaffCard;
