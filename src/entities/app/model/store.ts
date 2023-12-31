import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { useStore, useCreateSelectors } from 'shared/hooks';

type Store = {};
const { createSelectors, generateSelectorWithObj } = useStore<Store>();
const AppStore = create<Store>()(devtools(immer((set) => ({}))));

const useAppStore = useCreateSelectors(AppStore);

export default useAppStore;
