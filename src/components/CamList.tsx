import "../css/cam-list.css";
import { cams } from "../data/cams";

function CamList() {
  return (
    <div className="cam-list">
      {cams.map((beach) => {
        return (
          <div key={beach.name}>
            <button>{beach.name}</button>
          </div>
        );
      })}
    </div>
  );
}
export default CamList;
