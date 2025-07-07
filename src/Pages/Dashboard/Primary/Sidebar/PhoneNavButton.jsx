export default function PhoneNavButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed z-10 left-0 w-1.5 h-16 bg-pinky xl:hidden"
    ></button>
  );
}
