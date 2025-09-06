import {create} from 'zustand'

export const useAppStore = create((set) => ({
  isSearchModalOpen: false,
  isCreatePostModalOpen: false,
  isDetailsModalOpen: false,
  isAuthModalOpen: false,
  isSuccessPostCreatedModalOpen: false,
  isRedirectionModalOpen: false,

  travelDetail: {
    id: 0,
    depatureDate: "",
    arrivalDate: "",
    from: "",
    to: "",
    pricePerKg: 0,
    weightAvailable: 0,
    owner: {}
  },

  openSearchModal: () => set({ isSearchModalOpen: true }),
  closeSearchModal: () =>set({isSearchModalOpen: false}),
  
  openDetailsModal: () => set({isDetailsModalOpen: true}),
  closeDetailsModal: () => set({isDetailsModalOpen: false}),

  openCreatePostModal: () => set({ isCreatePostModalOpen: true }),

  openAuthModal: () => set({isAuthModalOpen: true}),
  closeAuthModal: () => set({isAuthModalOpen: false}),

  openSuccesPostCreatedModal: () => set({isSuccessPostCreatedModalOpen: true, isCreatePostModalOpen: false}),

  openRedirectionModel: () => set({isRedirectionModalOpen: true, isDetailsModalOpen: false}),

  setTravelDetail: (travelDetail) => set({ travelDetail }),

  closeAllModals: () => set({ 
    isSearchModalOpen: false,
    isCreatePostModalOpen: false,
    isDetailsModalOpen: false,
    isAuthModalOpen: false,
    isSuccessPostCreatedModalOpen: false,
    isRedirectionModalOpen: false
  })
}))