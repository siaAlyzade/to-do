import { NavLink } from "react-router-dom";

export default function NavItem({ children, linkTo, svgPath }) {
  return (
    <li>
      <NavLink
        className=" group flex items-center  w-72 h-14 hover:bg-white active:bg-white focus:bg-white transition-colors rounded-[14px] pl-4 py-5 gap-4;"
        to={linkTo}
      >
        <svg
          className=" w-[24px] h-[24px] "
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-[.active]:fill-pinky group-hover:fill-pinky group-active:fill-pinky group-focus:fill-pinky transition-colors "
            d={svgPath}
            fill="white"
          />
        </svg>{" "}
        <p className="group-[.active]:text-pinky group-hover:text-pinky group-active:text-pinky  group-focus:text-pinky transition-colors text-white text-sm ml-4">
          {children}
        </p>
      </NavLink>
    </li>
  );
}
