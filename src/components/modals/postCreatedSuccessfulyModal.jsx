import ModalLayout from "./modalLayout";

export default function PostCreatedSuccessfulyModal(){
    return(
        <div className="pt-[72px] bg-white rounded-t-[20px] absolute bottom-0">
            <CloseButton />
            <div className="space-y-6 px-4 pb-[200px] pt-4">
                <h2 className="text-xxl text-greyScale800 font-dmSansSemibold">Connecter vous pour continuer</h2>
                <div className="space-y-3">
                    
                </div>
                <p className="text-xs text-greyScale500">La sécurisation de vos informations personnelles est notre priorité. Consultez nos mesures de confidentialité.</p>
            </div>
        </div>
    )
}