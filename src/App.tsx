import CamDemo from "./components/CamDemo";
import CamList from "./components/CamList";
import "./css/app.css";

function App() {
  return (
    <div className="app">
      <CamList></CamList>
      <CamDemo></CamDemo>
    </div>
  );
}

export default App;
