import TodoCard from "./TodoCard";

export default function Day({ date }) {
  return (
    <li>
      <p className="text-xs mb-4 ">
        {date}
        <span className="text-[#A1A3AB] ml-2">
          <span className="text-2xl">.</span>
          Today
        </span>
      </p>
      <ul className="flex flex-col gap-2.5 md:px-2">
        <TodoCard />
        <TodoCard />
      </ul>
    </li>
  );
}
