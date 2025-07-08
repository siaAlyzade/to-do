import { MenuSvg, ProgressSvg } from "./Svgs";

function CompletedCard() {
  return (
    <li className="flex flex-col px-3.5 py-3 border-1 border-[#A1A3AB] rounded-[14px] font-Inter scale-95">
      <div className="flex justify-between">
        <ProgressSvg color="#05a301" />{" "}
        <button>
          <MenuSvg />
        </button>
      </div>
      <div className="px-8   flex flex-col">
        <div className="flex -translate-y-4 ">
          <div className="flex flex-col gap-2.5 ">
            <h3 className="text-[14px] max-w-60 font-semibold ">
              Attend Nischal’s Birthday Party
            </h3>
            <p className="text-[10px] max-w-[232px] text-[#747474]">
              Buy gifts on the way and pick up cake from the bakery. (6 PM |
              Fresh Elements).....
            </p>
          </div>
          <img
            className="w-16 h-16 rounded-[14px] self-end object-cover translate-x-4"
            src="CardExample.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2 text-[8px] ">
          <div className="flex gap-3 mr-6 ">
            <p>
              Status:
              <span className="text-Status-Completed">Completed</span>
            </p>
          </div>
          <p className="text-[#747474]">Completed X days ago.</p>
        </div>
      </div>
    </li>
  );
}

export default CompletedCard;
