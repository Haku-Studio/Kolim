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
import { useRequest } from "../hooks/api/useRequest";
import { validateTravelForm } from "../utils/validateTravelForm";
import CreateTravelForm from "../components/forms/CreateTravelForm";
import { validateSearchForm } from "../utils/validateSearchForm";
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

  const travelDetail = useAppStore((state) => state.travelDetail);

  const { createTravel, isLoading, error } = useTravel();
  const { createRequest } = useRequest();

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    arrivalDate: "",
    weightAvailable: 0,
    pricePerKg: 0,
    phoneNumber: 0
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

  // search config
  const [errors, setErrors] = useState({});
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    availableWeight: "",
    departureDate: "",
    arrivalDate: "",
  });

  const handleSearchValidate = () => {
    const validationErrors = validateSearchForm(searchData);
    setErrors(validationErrors);
    console.log(Object.values(validationErrors));
    
    return Object.keys(validationErrors).length === 0;
  };

  const goToSearchPage = async () => {
    const formIsValid = handleSearchValidate();
    console.log(formIsValid);
    
    if (formIsValid) {
      closeSearchModal();
      router.navigate({
        to: "/search",
        search: { ...searchData },
      });
    }
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
        phoneNumber: 0
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

  // pour le mvp
  const createRequestForTravel = async () => {
    const requestData = {
      travel: travelDetail.id,
      weight: travelDetail.weightAvailable,
      description: "RAS"
      // status: "pending",
    };
    return await createRequest(requestData);
  };

  const handleWhatsappRedirection = async () => {
    openRedirectionModal();

    const response = await createRequestForTravel();

    console.log("request emission response", response);

    const countryCode = travelDetail.owner.phone.startsWith("+") ? "" : "+237";
    // Rediriger vers WhatsApp avec les détails du voyage
    window.open(`https://wa.me/${countryCode}${travelDetail.owner.phone}?text=Bonjour,%20je%20veux%20réserver%20un%20voyage%20de%20${travelDetail.from}%20à%20${travelDetail.to}%20du%20${travelDetail.departureDate}%20au%20${travelDetail.arrivalDate}.%20Poids%20disponible:%20${travelDetail.weightAvailable}%20kg.%20Prix%20du%20kilo:%20${travelDetail.pricePerKg}%20$.`, "_blank");
  }


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
              action = {goToSearchPage}
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
              action = {openRedirectionModal}
            >
              <div className="space-y-3">
                <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                  <h3 className="font-dmSansSemibold text-sm">Itineraire</h3>
                  <p className="text-xs text-greyScale300">Istanbul → Douala</p>
                </div>
                <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                  <h3 className="font-dmSansSemibold text-sm">Date et heure de depart</h3>
                  <p className="text-xs text-greyScale300">24, septembre 2025 - 08h00</p>
                </div>
                <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                  <h3 className="font-dmSansSemibold text-sm">Date et heure de d'arrivée</h3>
                  <p className="text-xs text-greyScale300">25, septembre 2025 - 10h30</p>
                </div>
                <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                  <h3 className="font-dmSansSemibold text-sm">Poids disponible</h3>
                  <p className="text-xs text-greyScale300">23 kilos * 2</p>
                </div>
                <div className="space-y-[2px] pb-3m ">
                  <h3 className="font-dmSansSemibold text-sm">Prix du kilo</h3>
                  <p className="text-xs text-greyScale300">15$</p>
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
