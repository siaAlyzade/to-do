import { InviteSvg } from "../Svgs";

export default function InviteButton() {
  return (
    <button className="flex gap-1 items-center justify-center py-2 px-2.5 border-1 border-pinky rounded-lg">
      <InviteSvg /> <span className="text-pinky">Invite</span>
    </button>
  );
}
