import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

let counterStore = (set) => ({
  count: 1,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 1 }),
  setNumber: (number) => set({ count: number }),
});

counterStore = persist(counterStore, {
  name: "counter-storage",
  storage: createJSONStorage(() => localStorage),
});

counterStore = devtools(counterStore);

export const useCounterStore = create(counterStore);
