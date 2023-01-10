import { Person } from "../data/types";
import StaffCard from "./StaffCard";

type StaffGroupProps = {
    people: Person[];
};

function StaffGroup({ people }: StaffGroupProps) {
    return (
        <div className="flex flex-wrap justify-around">
            {people.map((person, index) => (
                <StaffCard key={index} person={person} />
            ))}
        </div>
    );
}

export default StaffGroup;
