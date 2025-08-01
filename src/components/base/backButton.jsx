import { useRouter } from "@tanstack/react-router"
import { useAppStore } from "../../store/useAppStore";

export default function BackButton() {
    const router = useRouter()

    const closeDetailsModal = useAppStore(state => state.closeDetailsModal)

    const backToLastPage = () => {
        router.history.back();
        closeDetailsModal()
    };

    return (
        <button 
            onClick={backToLastPage}
            className="w-10 h-10 rounded-full border border-solid border-greyScale100 flex items-center justify-center"
        >
            <svg class="arrow-left-s-line" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.02375 10.0006L13.1486 14.1253L11.9701 15.3038L6.66675 10.0006L11.9701 4.69727L13.1486 5.87577L9.02375 10.0006Z" fill="#030616" />
            </svg>
        </button>
    )
}