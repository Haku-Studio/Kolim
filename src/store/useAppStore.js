import {create} from 'zustand'

export const useAppStore = create((set) => ({
  isSearchModalOpen: false,
  isCreatePostModalOpen: false,
  isDetailsModalOpen: false,
  isAuthModalOpen: false,
  isSuccessPostCreatedModalOpen: false,

  openSearchModal: () => set({ isSearchModalOpen: true }),
  closeSearchModal: () => set({ isSearchModalOpen: false }),
  
  openDetailsModal: () => set({isDetailsModalOpen: true}),
  closeDeatilsModal: () => set({isDetailsModalOpen: false}),

  openCreatePostModal: () => set({ isCreatePostModalOpen: true }),
  closeCreatePostModal: () => set({ isCreatePostModalOpen: false }),

  openAuthModal: () => set({isAuthModalOpen: true}),
  closeAuthModal: () => set({isAtuhModalOpen: false}),

  openSuccesPostCreatedModal: () => set({isSuccessPostCreatedModalOpen: true, isCreatePostModalOpen: false}),

  closeAllModals: () => set({ 
    isSearchModalOpen: false,
    isCreatePostModalOpen: false,
    isDetailsModalOpen: false,
    isAuthModalOpen: false,
    isSuccessPostCreatedModalOpen: false
  })
}))