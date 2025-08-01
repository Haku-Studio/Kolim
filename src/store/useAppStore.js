import {create} from 'zustand'

export const useAppStore = create((set) => ({
  isSearchModalOpen: false,
  isCreatePostModalOpen: false,
  isDetailsModalOpen: false,
  isAuthModalOpen: false,
  isSuccessPostCreatedModalOpen: false,
  isRedirectionModalOpen: false,

  openSearchModal: () => set({ isSearchModalOpen: true }),
  closeSearchModal: () =>set({isSearchModalOpen: false}),
  
  openDetailsModal: () => set({isDetailsModalOpen: true}),
  closeDetailsModal: () => set({isDetailsModalOpen: false}),

  openCreatePostModal: () => set({ isCreatePostModalOpen: true }),

  openAuthModal: () => set({isAuthModalOpen: true}),

  openSuccesPostCreatedModal: () => set({isSuccessPostCreatedModalOpen: true, isCreatePostModalOpen: false}),

  openRedirectionModel: () => set({isRedirectionModalOpen: true, isDetailsModalOpen: false}),


  closeAllModals: () => set({ 
    isSearchModalOpen: false,
    isCreatePostModalOpen: false,
    isDetailsModalOpen: false,
    isAuthModalOpen: false,
    isSuccessPostCreatedModalOpen: false,
    isRedirectionModalOpen: false
  })
}))