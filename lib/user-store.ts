import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { zustandStorage } from './zustand-persist';

interface UserState {
  heightIn: number;
  setupUser: (heightIn: number, weightLb: number) => void;
  hardMode: boolean;
  toggleHardMode: () => void;
}

export const useUserSettings = create<UserState>()(
  persist(
    (set, get) => ({
      heightIn: 0,
      hardMode: false,
      toggleHardMode: () => set({ hardMode: !get().hardMode }),
      setupUser: (heightIn, weightLb) => set({ heightIn }),
    }),
    { name: 'user-store', storage: createJSONStorage(() => zustandStorage) }
  )
);
