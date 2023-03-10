import { SectionTitle } from "../components/SectionTitle";
import StaffGroup from "../components/StaffGroup";
import { professors, htas, utas } from "../data/staff";

export const StaffSection = () => {
    return (
        <section id="staff" className="min-h-screen">
            <div>
                <SectionTitle text="Professors" />
                <StaffGroup people={professors} />

                <SectionTitle text="HTAs" />
                <StaffGroup people={htas} />

                <SectionTitle text="UTAs" />
                <StaffGroup people={utas} />
            </div>
        </section>
    );
};
