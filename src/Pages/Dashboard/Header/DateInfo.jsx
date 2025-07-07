import ButtonPinky from "./ButtonPinky";
import DateDisplayer from "./DateDisplayer";

export default function DateInfo() {
  return (
    <div className="flex gap-1.5">
      <ButtonPinky src="Bell.svg" />
      <ButtonPinky src="Cal.svg" />
      <DateDisplayer />
    </div>
  );
}
