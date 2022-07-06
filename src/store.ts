import create from "zustand";
import { Cam } from "./data/cams";

interface UiState {
  currentCam: Cam;
  setCam: (cam: Cam) => void;
}

export const useStore = create<UiState>((set) => ({
  // init state
  currentCam: {
    name: "lennox",
    url: "https://cams.cdn-surfline.com/cdn-au/au-lennoxhead/playlist.m3u8",
  },
  setCam: (cam: Cam) => set({ currentCam: cam }),
}));
