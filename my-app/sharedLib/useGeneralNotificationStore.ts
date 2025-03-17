import { create } from "zustand";

interface GeneralNotificationState {
  type: "success" | "error" | "warning" | "info" | null;
  message: string | null;
  details: string[] | null;
  setNotification: (
    type: GeneralNotificationState["type"],
    message: string,
    details: string[] | null
  ) => void;
  clearNotification: () => void;
}

export const useGeneralNotificationStore = create<GeneralNotificationState>(
  (set) => ({
    type: null,
    message: null,
    details: null,
    setNotification: (type, message, details = null) =>
      set({ type, message, details }), // Now accepts details
    clearNotification: () => set({ type: null, message: null, details: null }),
  })
);
