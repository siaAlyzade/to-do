import ProfPic from "./ProfPic";

function MiniProfile() {
  return (
    <section className="MiniProfile">
      <ProfPic src="Ellipse.jpg" alt="" extraClasses="w-[86px] h-[86px] mb-3" />
      <p className="text-sm text-white">Siavash Alizade</p>
      <p className="text-xs text-white">sialyzade@gmail.com</p>
    </section>
  );
}

export default MiniProfile;
