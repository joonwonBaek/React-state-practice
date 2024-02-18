import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

export const useCounterStore = create(
  devtools(
    persist(
      (set) => ({
        count: 1,
        increment: () => set((state) => ({ count: state.count + 1 })),
        reset: () => set({ count: 1 }),
        setNumber: (number) => set({ count: number }),
      }),
      {
        name: "counter-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
