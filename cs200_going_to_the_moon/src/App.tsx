import Navbar from "./components/Navbar";
import PageBackground from "./components/PageBackground";
import Home from "./sections/Home";
import Resources from "./sections/Resources";
import Lectures from "./sections/Lectures";
import Assignments from "./sections/Assignments";
import Labs from "./sections/Labs";
import Calendars from "./sections/Calendars";
import Staff from "./sections/Staff";

function App() {
  return (
    <>
      <Lectures />
      <Assignments />
      <Labs />
    </>
  );
}

export default App;
