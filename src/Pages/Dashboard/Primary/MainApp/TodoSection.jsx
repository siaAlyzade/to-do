import CardsSection from "./CardsSection";
import DaysList from "./DaysList";
import ToDoHeader from "./ToDoHeader";
// what about the fucking line?
function TodoSection() {
  return (
    <CardsSection>
      <ToDoHeader />
      <DaysList />
    </CardsSection>
  );
}
export default TodoSection;
