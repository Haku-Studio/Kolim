import { createFileRoute } from '@tanstack/react-router'
import ModalLayout from '../components/modals/modalLayout'
import SearchForm from '../components/forms/SearchForm'
import BackButton from '../components/base/backButton'
import SearchButtonSecondary from '../components/base/searchButtonSecondary'
import { useAppStore } from '../store/useAppStore'
import AppContainer from '../components/partials/appContainer'

export const Route = createFileRoute('/search')({
  component: RouteComponent,
})

function RouteComponent() {

    const isSearchModalOpen = useAppStore(state => state.isSearchModalOpen)

  return (
    <div className="font-dmSansRegular max-w-md w-full">
        <div className=" trackink-thigher flex items-center justify-between px-4 py-4 border-b border-b-solid border-b-greyScale50">
            <BackButton />
            <h2 className='text-base font-dmSansSemibold text-greyScale800'>Rechercher un depart</h2>
            <SearchButtonSecondary />
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
