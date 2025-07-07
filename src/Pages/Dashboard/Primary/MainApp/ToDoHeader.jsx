import SectionLogo from "./SectionLogo";
import ToHeader from "./ToHeader";
import { PendingSvg, AddSvg } from "./Svgs";

export default function ToDoHeader() {
  return (
    <ToHeader>
      <SectionLogo svgEl={<PendingSvg />} text="To-DO" />
      <button className="flex items-center">
        <AddSvg /> <p className="ml-1">Add Task</p>
      </button>
    </ToHeader>
  );
}
