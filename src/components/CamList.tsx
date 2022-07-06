import "../css/cam-list.css";
import { cams } from "../data/cams";

function CamList() {
  return (
    <div className="cam-list">
      {cams.map((beach) => {
        return (
          <div>
            <button>{beach.name}</button>
          </div>
        );
      })}
    </div>
  );
}
export default CamList;
