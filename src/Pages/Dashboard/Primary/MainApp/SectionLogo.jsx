export default function SectionLogo({
  svgEl,
  text,
  colorClass = "text-pinky",
}) {
  return (
    <h3 className="flex items-center">
      {svgEl} <p className={`${colorClass} text-base ml-1`}>{text}</p>
    </h3>
  );
}
