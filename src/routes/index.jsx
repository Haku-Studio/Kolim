import { createFileRoute } from '@tanstack/react-router'
import AuthButton from '../components/base/authButton'
import AppLayout from '../components/appLayout'
import SearchButton from '../components/base/searchButton'
import Tabs from '../components/base/tabs'
import AppContainer from '../components/partials/appContainer'
import ModalLayout from '../components/modals/modalLayout'
import PrimaryButton from '../components/base/primaryButton'
import SearchForm from '../components/forms/SearchForm'
import {useEffect} from 'react'
import {useAppStore} from '@/store/useAppStore'
import published from '@/assets/app_illustrations/published.svg'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {

  const isSearchModalOpen = useAppStore(state => state.isSearchModalOpen)
  const isCreatePostModalOpen = useAppStore(state => state.isCreatePostModalOpen)
  const isDetailsModalOpen = useAppStore(state => state.isDetailsModalOpen)
  const isSuccessPostCreatedModalOpen = useAppStore(state => state.isSuccessPostCreatedModalOpen)

  const openSuccesPostCreatedModal = useAppStore(state => state.openSuccesPostCreatedModal)
  
  useEffect(() => {
    if(isSearchModalOpen || isCreatePostModalOpen ||isDetailsModalOpen ||isSuccessPostCreatedModalOpen){
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow=""
    }
  }, [isSearchModalOpen, isCreatePostModalOpen, isDetailsModalOpen, isSuccessPostCreatedModalOpen])

  return (
    <AppLayout>
      <SearchButton />
      <Tabs />
      <AppContainer />
      {
        isSearchModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ">
            <ModalLayout 
              modalTitle = "Rechercher un depart"
              buttonName = "Rechercher"
            >
              <SearchForm />
            </ModalLayout>
          </div>
        )
      }
      {
        isDetailsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ">
            <ModalLayout 
              modalTitle = "Details du voyage"
              buttonName = "Envoyer un colis"
            >
              <div className="space-y-3">
                <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                  <h3 className="font-dmSansSemibold text-md">Itineraire</h3>
                  <p className="text-sm text-greyScale300">Istanbul → Douala</p>
                </div>
                <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                  <h3 className="font-dmSansSemibold text-md">Date et heure de depart</h3>
                  <p className="text-sm text-greyScale300">24, septembre 2025 - 08h00</p>
                </div>
                <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                  <h3 className="font-dmSansSemibold text-md">Date et heure de d'arrivée</h3>
                  <p className="text-sm text-greyScale300">25, septembre 2025 - 10h30</p>
                </div>
                <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                  <h3 className="font-dmSansSemibold text-md">Poids disponible</h3>
                  <p className="text-sm text-greyScale300">23 kilos * 2</p>
                </div>
                <div className="space-y-[2px] pb-3m ">
                  <h3 className="font-dmSansSemibold text-md">Prix du kilo</h3>
                  <p className="text-sm text-greyScale300">15$</p>
                </div>
              </div>
            </ModalLayout>
          </div>
        )
      }
      {
        isCreatePostModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ">
            <ModalLayout 
              modalTitle = "Publier un voyage"
              buttonName = "Publier"
              action = {openSuccesPostCreatedModal}
            >
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-[6px]">
                    <label 
                      htmlFor="depature_town"
                      className="text-sm font-dmSansMedium block"
                    >Ville de depart*</label>
                    <input 
                      type="depature_town" 
                      id="depature_town"
                      placeholder=""
                      className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full"
                      required
                    />
                  </div>
                  <div className="space-y-[6px]">
                    <label 
                      htmlFor="depature_town"
                      className="text-sm font-dmSansMedium block"
                    >Ville de d'arrivée*</label>
                    <input 
                      type="depature_town" 
                      id="depature_town"
                      placeholder=""
                      className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-[6px]">
                  <label 
                    htmlFor="depature_town"
                    className="text-sm font-dmSansMedium block"
                  >Poids disponible*</label>
                  <input 
                    type="depature_town" 
                    id="depature_town"
                    placeholder=""
                    className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full"
                    required
                  />
                </div>
                <div className="space-y-[6px]">
                  <label 
                    htmlFor="depature_town"
                    className="text-sm font-dmSansMedium block"
                  >Prix du colis (en $)*</label>
                  <input 
                    type="depature_town" 
                    id="depature_town"
                    placeholder=""
                    className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-[6px]">
                    <label 
                      htmlFor="depature_town"
                      className="text-sm font-dmSansMedium block"
                    >Date de depart*</label>
                    <input 
                      type="depature_town" 
                      id="depature_town"
                      placeholder=""
                      className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full"
                      required
                    />
                  </div>
                  <div className="space-y-[6px]">
                    <label 
                      htmlFor="depature_town"
                      className="text-sm font-dmSansMedium block"
                    >Heure de depart</label>
                    <input 
                      type="depature_town" 
                      id="depature_town"
                      placeholder=""
                      className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-[6px]">
                  <label 
                    htmlFor="depature_town"
                    className="text-sm font-dmSansMedium block"
                  >Numero de telephone*</label>
                  <input 
                    type="depature_town" 
                    id="depature_town"
                    placeholder=""
                    className="px-3 py-[13px] border border-solid border-greyScale50 rounded-[10px] bg-greyScale0 focus:outline-none block w-full"
                    required
                  />
                </div>
              </div>
            </ModalLayout>
          </div>
        )
      }
      {
        isSuccessPostCreatedModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ">
          <ModalLayout 
            modalTitle = ""
            buttonName = "Retour a la page d'acceuil"
          >
            <div className='flex items-center flex-col pb-6'> 
              <img src={published} alt="" />
              <h3 className='text-greyScale800 text-xxl font-dmSansSemibold max-w-[245px] text-center'>Voyage publié avec succès</h3>
            </div>
          </ModalLayout>
          </div>
        )
      }
    </AppLayout>
  )
}