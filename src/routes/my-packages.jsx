import { createFileRoute } from '@tanstack/react-router'
import ModalLayout from '../components/modals/modalLayout'
import SearchForm from '../components/forms/SearchForm'
import BackButton from '../components/base/backButton'
import SearchButtonSecondary from '../components/base/searchButtonSecondary'
import { useAppStore } from '../store/useAppStore'
import AppContainer from '../components/partials/appContainer'
import Tabs from '../components/base/tabs'
import { useState } from 'react'

export const Route = createFileRoute('/my-packages')({
  component: RouteComponent,
})

function RouteComponent() {

const isSearchModalOpen = useAppStore(state => state.isSearchModalOpen)

const [activeTab, setActiveTab] = useState('position') 

  return (
      <div className="font-dmSansRegular max-w-md w-full">
          <div className=" trackink-thigher flex items-center justify-between px-4 py-4 border-b border-b-solid border-b-greyScale50">
              <BackButton />
              <h2 className='text-base font-dmSansSemibold text-greyScale800'>Mes colis</h2>
              <div className='w-10'></div>
          </div>
            <div className="border-y border-y-solid border-greyScale100 grid grid-cols-2">
                <button 
                    className={`flex items-center justify-center py-[12px] text-sm ${
                        activeTab === 'position' 
                            ? 'font-dmSansSemibold border-b border-b-solid border-[#6791C8]' 
                            : ''
                    }`}
                    onClick={() => setActiveTab('position')}
                >
                    <span>Colis envoyees</span>
                </button>
                <button 
                    className={`flex items-center justify-center py-[12px] text-sm ${
                        activeTab === 'everywhere' 
                            ? 'font-dmSansSemibold border-b border-b-solid border-[#6791C8]' 
                            : ''
                    }`}
                    onClick={() => setActiveTab('everywhere')}
                >
                    <span>Colis transportees</span>
                </button>
            </div>
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
      </div>
    )
}
