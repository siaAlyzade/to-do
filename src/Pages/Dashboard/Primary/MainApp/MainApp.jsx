import MainAppView from "./MainAppView";
import Welcome from "./Welcome/Welcome";

export default function MainApp() {
  return (
    <div className="MainApp">
      <Welcome />
      <MainAppView />
    </div>
  );
}
