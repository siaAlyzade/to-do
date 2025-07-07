export default function CardsSection({ children, extraClasses }) {
  return (
    <div
      className={`${extraClasses} flex flex-col bg-[#F5F8FF] rounded-[14px] px-6 py-5 gap-2.5 `}
    >
      {children}
    </div>
  );
}
