import { NavMenuSvg } from "../MainApp/Svgs";

export default function PhoneNavButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed z-10 left-0 p-2 bg-pinky xl:hidden"
    >
      <NavMenuSvg />
    </button>
  );
}
