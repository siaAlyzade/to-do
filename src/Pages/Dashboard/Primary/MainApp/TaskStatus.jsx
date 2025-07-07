import "react-circular-progressbar/dist/styles.css";

import CardsSection from "./CardsSection";
import SectionLogo from "./SectionLogo";
import { TaskStatusSvg } from "./Svgs";
import ToHeader from "./ToHeader";
import CircleBar from "./CircleBar";

function TaskStatus() {
  return (
    <CardsSection extraClasses="">
      <ToHeader>
        <SectionLogo svgEl={<TaskStatusSvg />} text="Task Status" />
      </ToHeader>
      <StatusCircles></StatusCircles>
    </CardsSection>
  );
}
function StatusCircles() {
  return (
    <div className="flex flex-col items-center justify-between md:mt-6 gap-6 lg:flex-row">
      <CircleBar
        value={84}
        trailColor="#D9D9D9"
        pathColor="#05a301"
        status="Completed"
      />
      <CircleBar
        value={46}
        trailColor="#D9D9D9"
        pathColor="#0225ff"
        status="InProgress"
      />
      <CircleBar
        value={13}
        trailColor="#D9D9D9"
        pathColor="#f21e1e"
        status="NotStarted"
      />
    </div>
  );
}
export default TaskStatus;
