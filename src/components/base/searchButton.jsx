import { useAppStore } from "../../store/useAppStore"

export default function SearchButton(){
    const openSearchModal = useAppStore(state => state.openSearchModal)
    return (
        <div className="px-4 py-3">
            <button 
                onClick={openSearchModal}
                className="py-[10px] px-[12px] border border-solid border-greyScale100 bg-greyScale0 flex items-center space-x-2 rounded-full w-full"
            >
                <svg className="search-line" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0259 13.8473L18.5948 17.4162L17.4163 18.5947L13.8474 15.0258C12.5642 16.0525 10.9367 16.6667 9.16675 16.6667C5.02675 16.6667 1.66675 13.3067 1.66675 9.16666C1.66675 5.02666 5.02675 1.66666 9.16675 1.66666C13.3067 1.66666 16.6667 5.02666 16.6667 9.16666C16.6667 10.9367 16.0526 12.5641 15.0259 13.8473ZM13.354 13.229C14.373 12.1788 15.0001 10.7463 15.0001 9.16666C15.0001 5.94374 12.3897 3.33332 9.16675 3.33332C5.94383 3.33332 3.33341 5.94374 3.33341 9.16666C3.33341 12.3896 5.94383 15 9.16675 15C10.7464 15 12.1789 14.3729 13.2291 13.3539L13.354 13.229Z" fill="#4A5567" />
                </svg>
                <span className="w-full text-left text-xs">Rechercher un depart</span>
            </button>
        </div>
    )
}