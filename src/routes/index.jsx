import { createFileRoute, useRouter } from "@tanstack/react-router";
import AuthButton from "../components/base/authButton";
import AppLayout from "../components/appLayout";
import SearchButton from "../components/base/searchButton";
import Tabs from "../components/base/tabs";
import AppContainer from "../components/partials/appContainer";
import ModalLayout from "../components/modals/modalLayout";
import PrimaryButton from "../components/base/primaryButton";
import SearchForm from "../components/forms/SearchForm";
import { useEffect, useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import published from "@/assets/app_illustrations/published.svg";
import redirection from "@/assets/app_illustrations/redirection.svg";
import { useTravel } from "../hooks/api/useTravel";
import { validateTravelForm } from "../utils/validateTravelForm";
import CreateTravelForm from "../components/forms/CreateTravelForm";
// import axios from "axios";
// import { travelService } from "../api/services/travelService";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const router = useRouter();

  const isSearchModalOpen = useAppStore((state) => state.isSearchModalOpen);
  const isCreatePostModalOpen = useAppStore(
    (state) => state.isCreatePostModalOpen
  );
  const isDetailsModalOpen = useAppStore((state) => state.isDetailsModalOpen);
  const isSuccessPostCreatedModalOpen = useAppStore(
    (state) => state.isSuccessPostCreatedModalOpen
  );
  const isRedirectionModalOpen = useAppStore(
    (state) => state.isRedirectionModalOpen
  );

  // const openSuccesPostCreatedModal = useAppStore(
  //   (state) => state.openSuccesPostCreatedModal
  // );
  const openRedirectionModal = useAppStore(
    (state) => state.openRedirectionModel
  );

  const closeSearchModal = useAppStore((state) => state.closeSearchModal);

  const { createTravel, isLoading, error } = useTravel();

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    arrivalDate: "",
    weightAvailable: 0,
    pricePerKg: 0,
  });
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (
      isSearchModalOpen ||
      isCreatePostModalOpen ||
      isDetailsModalOpen ||
      isSuccessPostCreatedModalOpen ||
      isRedirectionModalOpen
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [
    isSearchModalOpen,
    isCreatePostModalOpen,
    isDetailsModalOpen,
    isSuccessPostCreatedModalOpen,
    isRedirectionModalOpen,
  ]);

  const goToSearchPage = async () => {
    closeSearchModal();
    router.navigate({ to: "/search" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateTravelForm(formData);
    setFormErrors(errors);
    const hasErrors = Object.values(errors).some((v) => v && v.length > 0);
    if (hasErrors) return;

      console.log("Form data:", formData);


    try {
      console.log("Form data:", formData);

      await createTravel({ ...formData });
      setSuccessMessage("Voyage publié avec succès !");
      setFormData({
        from: "",
        to: "",
        departureDate: "",
        arrivalDate: "",
        weightAvailable: 0,
        pricePerKg: 0,
      });
      setFormErrors({});
      // Optionnel: fermer le modal ou afficher le modal de succès
    } catch (error) {
      setSuccessMessage("");
      setFormErrors({ api: error.message || "Erreur lors de la création" });
    }
  };

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  return (
    <AppLayout>
      <SearchButton />
      <Tabs />
      <AppContainer />
      
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ">
          <ModalLayout
            modalTitle="Rechercher un depart"
            buttonName="Rechercher"
            action={goToSearchPage}
          >
            <SearchForm />
          </ModalLayout>
        </div>
      )}
      {isDetailsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ">
          <ModalLayout
            modalTitle="Details du voyage"
            buttonName="Envoyer un colis"
            action={openRedirectionModal}
          >
            <div className="space-y-3">
              <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                <h3 className="font-dmSansSemibold text-sm">Itineraire</h3>
                <p className="text-xs text-greyScale300">Istanbul → Douala</p>
              </div>
              <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                <h3 className="font-dmSansSemibold text-sm">
                  Date et heure de depart
                </h3>
                <p className="text-xs text-greyScale300">
                  24, septembre 2025 - 08h00
                </p>
              </div>
              <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                <h3 className="font-dmSansSemibold text-sm">
                  Date et heure de d'arrivée
                </h3>
                <p className="text-xs text-greyScale300">
                  25, septembre 2025 - 10h30
                </p>
              </div>
              <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                <h3 className="font-dmSansSemibold text-sm">
                  Poids disponible
                </h3>
                <p className="text-xs text-greyScale300">23 kilos * 2</p>
              </div>
              <div className="space-y-[2px] pb-3m ">
                <h3 className="font-dmSansSemibold text-sm">Prix du kilo</h3>
                <p className="text-xs text-greyScale300">15$</p>
              </div>
            </div>
          </ModalLayout>
        </div>
      )}
      {isCreatePostModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ">
          <ModalLayout
            modalTitle="Publier un voyage"
            buttonName={isLoading ? "Publication..." : "Publier"}
            action={handleSubmit}
          >
            <CreateTravelForm
              formData={formData}
              setFormData={setFormData}
              formErrors={formErrors}
              isLoading={isLoading}
            />
            {formErrors.api && (
              <div className="text-red-500 text-xs mt-2">{formErrors.api}</div>
            )}
            {successMessage && (
              <div className="text-green-600 text-xs mt-2">
                {successMessage}
              </div>
            )}
          </ModalLayout>
        </div>
      )}
      {isSuccessPostCreatedModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ">
          <ModalLayout modalTitle="" buttonName="Retour a la page d'acceuil">
            <div className="flex items-center flex-col pb-6">
              <img src={published} alt="" />
              <h3 className="text-greyScale800 text-xxl font-dmSansSemibold max-w-[245px] text-center">
                Voyage publié avec succès
              </h3>
            </div>
          </ModalLayout>
        </div>
      )}

      {isRedirectionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ">
          <ModalLayout modalTitle="" buttonName="Continuer">
            <div className="flex items-center flex-col pb-6">
              <img src={redirection} alt="" />
              <h3 className="text-greyScale800 text-xxl font-dmSansSemibold max-w-[245px] text-center">
                Redirection
              </h3>
            </div>
          </ModalLayout>
        </div>
      )}
    </AppLayout>
  );
}
