export default function ButtonPinky({ src, extraClasses = "" }) {
  return (
    <button className={`${extraClasses}`}>
      <div
        className={`flex  items-center justify-center w-[26px] h-[26px] lg:w-[36px] lg:h-[36px] bg-pinky p-1 rad rounded-lg  `}
      >
        <img src={src} alt="" className="w-[11.29px] h-[11.29px]" />
      </div>
    </button>
  );
}
