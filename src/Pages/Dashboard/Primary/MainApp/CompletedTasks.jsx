import CardsSection from "./CardsSection";
import CompletedCard from "./CompletedCard";
import SectionLogo from "./SectionLogo";
import { TaskCompleteSvg } from "./Svgs";
import ToHeader from "./ToHeader";

function CompletedTasks() {
  return (
    <CardsSection extraClasses="grow">
      <ToHeader>
        <SectionLogo
          svgEl={<TaskCompleteSvg />}
          text="Completed Task"
          colorClass="text-[#F24E1E]"
        />
      </ToHeader>
      <ul>
        <CompletedCard />
        <CompletedCard />
      </ul>
    </CardsSection>
  );
}

export default CompletedTasks;
