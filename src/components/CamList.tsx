import "../css/cam-list.css";
import { cams } from "../data/cams";

function CamList() {
  return (
    <div className="cam-list">
      {cams.map((cam) => {
        return (
          <div key={cam.name}>
            <button>{cam.name}</button>
          </div>
        );
      })}
    </div>
  );
}
export default CamList;
