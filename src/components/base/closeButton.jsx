import { useAppStore } from "../../store/useAppStore"

export default function CloseButton(){
    const closeAllModals = useAppStore(state => state.closeAllModals)
    return (
        <button 
            onClick={closeAllModals}
            className="flex items-center justify-center"
        >
            <svg className="absolute top-6 right-4 close-large-line" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9651 3.50513L10.8245 9.64673L10.4709 10.0002L16.9651 16.4944L16.4934 16.9651L10.3538 10.8254L10.0002 10.4709L9.64673 10.8254L3.50513 16.9651L3.03442 16.4934L9.17505 10.3538L9.52856 10.0002L3.03442 3.5061L3.5061 3.03442L10.0002 9.52856L10.3538 9.17505L16.4934 3.03442L16.9651 3.50513Z" stroke="#030616" />
            </svg>
        </button>
    )
}