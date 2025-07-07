import CompletedTasks from "./CompletedTasks";
import TaskStatus from "./TaskStatus";
import TodoSection from "./TodoSection";

export default function MainAppView() {
  return (
    <div className="MainAppView">
      <TodoSection />
      <div className="flex flex-col gap-4">
        <TaskStatus />
        <CompletedTasks />
      </div>
    </div>
  );
}
