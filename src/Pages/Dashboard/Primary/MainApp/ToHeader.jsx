import SectionLogo from "./SectionLogo";
import { PendingSvg } from "./Svgs";

export default function ToHeader({ children }) {
  return <div className="flex items-center justify-between">{children}</div>;
}
