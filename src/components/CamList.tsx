import "../css/cam-list.css";
import { cams } from "../data/cams";
import { useStore } from "../store";

function CamList() {
  const setCam = useStore((state) => state.setCam);

  return (
    <div className="cam-list">
      {cams.map((cam) => {
        return (
          <div key={cam.name}>
            <button onClick={() => setCam(cam)}>{cam.name}</button>
          </div>
        );
      })}
    </div>
  );
}
export default CamList;
