export default function CloseButton({ onClick }) {
  return (
    <button onClick={onClick} className="absolute top-4 right-6 xl:hidden">
      <svg
        className="w-[24px] h-[24px] fill-white"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" fill="none" width="24" height="24" />

        <g>
          <path d="M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36z" />
        </g>
      </svg>
    </button>
  );
}
