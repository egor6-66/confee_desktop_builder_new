import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { useStore, useCreateSelectors } from 'shared/hooks';

type Store = {};
// const { createSelectors } = useStore<Store>();
const viewerStore = create<Store>()(devtools(immer((set) => ({}))));

const useViewerStore = useCreateSelectors(viewerStore);

export default useViewerStore;
