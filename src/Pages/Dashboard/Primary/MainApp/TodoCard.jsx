import { MenuSvg, ProgressSvg } from "./Svgs";

function TodoCard() {
  return (
    <li className="TodoCard">
      <div className="flex justify-between">
        <ProgressSvg />{" "}
        <button>
          <MenuSvg />
        </button>
      </div>
      <div className="px-8  flex flex-col">
        <div className="flex -translate-y-4 ">
          <div className="flex flex-col gap-2.5 ">
            <h3 className="text-[14px] lg:text-base max-w-60 font-semibold ">
              Attend Nischal’s Birthday Party
            </h3>
            <p className="text-[10px] lg:text-[14px] max-w-[232px] text-[#747474]">
              Buy gifts on the way and pick up cake from the bakery. (6 PM |
              Fresh Elements).....
            </p>
          </div>
          <img
            className="w-16 h-16 rounded-[14px] self-end object-cover translate-x-4"
            src="/CardExample.jpg"
            alt=""
          />
        </div>
        <div className="flex text-[8px] justify-between">
          <div className="flex gap-3  ">
            <p>
              Priority:{" "}
              <span className="text-Priority-Moderate ">Moderate</span>
            </p>
            <p>
              Status:
              <span className="text-Status-NotStarted">Not Started</span>
            </p>
          </div>
          <p className="text-[#A1A3AB]">
            Created on: <span>20/06/2023</span>
          </p>
        </div>
      </div>
    </li>
  );
}

export default TodoCard;
