import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
export default function CircleBar({ trailColor, value, pathColor, status }) {
  return (
    <div className="flex flex-col">
      <div className="w-24 h-24 text-Status-NotStarted  ">
        <CircularProgressbar
          counterClockwise={true}
          value={value}
          text={`${value}%`}
          styles={buildStyles({
            strokeLinecap: "butt",
            trailColor: trailColor,
            pathColor: pathColor,
            textColor: pathColor,
          })}
        />
      </div>
      <p>
        <span className={`text-6xl/1 text-Status-${status} `}>.</span> Completed
      </p>
    </div>
  );
}
