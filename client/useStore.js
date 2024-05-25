import {create} from "zustand"



// Define the store
const useStore = create((set) => ({
  user: null, // Initial state for user
  token: null, // Initial state for token

  // Actions
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  clearUser: () => set({ user: null, token: null }),

  // Add any other state and actions you need
}));

export default useStore;