import create from "zustand";
import { Cam, cams } from "./data/cams";

interface UiState {
  currentCam: Cam;
  setCam: (cam: Cam) => void;
}

export const useStore = create<UiState>((set) => ({
  // init state
  currentCam: cams[26], // lenoxhead
  setCam: (cam: Cam) => set({ currentCam: cam }),
}));
