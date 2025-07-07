export default function ProfPic({ src, alt, extraClasses }) {
  return (
    <figure>
      <img
        className={` ${extraClasses} rounded-full object-cover border-2 border-white shadow-sm `}
        src={src}
        alt={alt}
      />
    </figure>
  );
}
