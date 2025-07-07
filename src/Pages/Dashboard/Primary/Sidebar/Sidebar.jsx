import { useState } from "react";
import MiniProfile from "./MiniProfile";
import NavList from "./NavList";
import CloseButton from "./CloseButton";
import PhoneNavButton from "./PhoneNavButton";

function Sidebar() {
  const [isSideBar, setIsSideBar] = useState(true);
  return (
    <>
      <PhoneNavButton onClick={() => setIsSideBar(true)} />
      <aside className={`SideBar ${isSideBar ? "" : "-translate-x-full "}`}>
        <MiniProfile />
        <NavList />
        <CloseButton onClick={() => setIsSideBar(false)} />
      </aside>
    </>
  );
}

export default Sidebar;
