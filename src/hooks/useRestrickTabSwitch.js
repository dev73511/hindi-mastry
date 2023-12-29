import {create} from 'zustand';

const useRestrictTabSwitch = create((set) => ({
    warningCount: 0,
    warningVisible: false,
    setWarningCount: () => set((state) => ({warningCount: state.warningCount + 1})),
    OnOpen: () => set({warningVisible: true}),
    OnClose: () => set({warningVisible: false})
}))

export default useRestrictTabSwitch;