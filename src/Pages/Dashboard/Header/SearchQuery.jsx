import ButtonPinky from "./ButtonPinky";

function SearchQuery() {
  return (
    <div className="flex grow  justify-center items-center relative max-w-[695px] ">
      <input
        className="w-full outline-none text-xs placeholder-[#A1A3AB] caret-pinky shadow-md px-3 rounded-lg h-[26px] font-Montserrat lg:h-[36px]"
        type="text "
        name=""
        id="site-search"
        placeholder="Search your task here..."
      />
      {/*relative right-[100%] */}
      <ButtonPinky src="Search.svg" extraClasses={"absolute right-0"} />
    </div>
  );
}

export default SearchQuery;
