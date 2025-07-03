import { create } from "zustand";

const SCREENS = {
  HOME: "home",
  INBOX: "inbox",
  TASKS: "tasks",
  CALENDAR: "calendar",
  SETTINGS: "settings",
};

type AppState = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  notifications: boolean;
  setNotifications: (value: boolean) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const useAppState = create<AppState>((set) => ({
  activeTab: SCREENS.HOME, // Default active tab
  setActiveTab: (tab: string) => set({ activeTab: tab }),
  notifications: true,
  darkMode: false,
  setNotifications: (value: boolean) => set({ notifications: value }),
  setDarkMode: (value: boolean) => set({ darkMode: value }),
}));

export default useAppState;
