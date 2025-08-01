import { useAppStore } from "../../store/useAppStore"

export default function SearchButtonSecondary(){

    const openSearchModal = useAppStore(state => state.openSearchModal)

    return(
        <button 
        onClick={openSearchModal}
            className="w-10 h-10 rounded-full border border-solid border-greyScale100 flex items-center justify-center"
        >
            <svg class="search-line" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0257 13.8473L18.5946 17.4162L17.4161 18.5947L13.8472 15.0258C12.5639 16.0525 10.9365 16.6667 9.1665 16.6667C5.0265 16.6667 1.6665 13.3067 1.6665 9.16666C1.6665 5.02666 5.0265 1.66666 9.1665 1.66666C13.3065 1.66666 16.6665 5.02666 16.6665 9.16666C16.6665 10.9367 16.0523 12.5641 15.0257 13.8473ZM13.3538 13.229C14.3728 12.1788 14.9998 10.7463 14.9998 9.16666C14.9998 5.94374 12.3894 3.33332 9.1665 3.33332C5.94359 3.33332 3.33317 5.94374 3.33317 9.16666C3.33317 12.3896 5.94359 15 9.1665 15C10.7462 15 12.1787 14.3729 13.2288 13.3539L13.3538 13.229Z" fill="#4A5567" />
            </svg>
        </button>
    )
}