import { createFileRoute, useSearch } from "@tanstack/react-router";
import ModalLayout from "../components/modals/modalLayout";
import SearchForm from "../components/forms/SearchForm";
import BackButton from "../components/base/backButton";
import SearchButtonSecondary from "../components/base/searchButtonSecondary";
import { useAppStore } from "../store/useAppStore";
import AppContainer from "../components/partials/appContainer";
import { useEffect, useState } from "react";
import { useTravel } from "../hooks/api/useTravel";

export const Route = createFileRoute("/search")({
  component: RouteComponent,
});

function RouteComponent() {
  const { search } = useTravel();
  const [results, setResults] = useState([]);
  const openRedirectionModal = useAppStore(
    (state) => state.openRedirectionModel
  );
  const isDetailsModalOpen = useAppStore((state) => state.isDetailsModalOpen);
  const travelDetail = useAppStore((state) => state.travelDetail);

  const isSearchModalOpen = useAppStore((state) => state.isSearchModalOpen);
  const searchParams = useSearch({ from: "/search" });
  console.log(searchParams.from);

  useEffect(() => {
    const handleSearchTravels = async () => {
      const results = await search(searchParams);
      console.log("results", results);
      return results;
    };

    setResults(handleSearchTravels());
  }, [searchParams]);

  return (
    <div className="font-dmSansRegular max-w-md w-full">
      <div className=" trackink-thigher flex items-center justify-between px-4 py-4 border-b border-b-solid border-b-greyScale50">
        <BackButton />
        <h2 className="text-base font-dmSansSemibold text-greyScale800">
          Rechercher un depart
        </h2>
        <SearchButtonSecondary />
      </div>
      <AppContainer type="search" searchResults={results && results} />
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ">
          <ModalLayout
            modalTitle="Rechercher un depart"
            buttonName="Rechercher"
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
                <p className="text-xs text-greyScale300">
                  {travelDetail.from} → {travelDetail.to}
                </p>
              </div>
              <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                <h3 className="font-dmSansSemibold text-sm">
                  Date et heure de depart
                </h3>
                <p className="text-xs text-greyScale300">
                  {travelDetail.departureDate} - 08h00
                </p>
              </div>
              <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                <h3 className="font-dmSansSemibold text-sm">
                  Date et heure de d'arrivée
                </h3>
                <p className="text-xs text-greyScale300">
                  {travelDetail.arrivalDate} - 10h30
                </p>
              </div>
              <div className="space-y-[2px] pb-3 border-b border-b-solid border-b-greyScale25">
                <h3 className="font-dmSansSemibold text-sm">
                  Poids disponible
                </h3>
                <p className="text-xs text-greyScale300">
                  {" "}
                  {travelDetail.weightAvailable}{" "}
                </p>
              </div>
              <div className="space-y-[2px] pb-3m ">
                <h3 className="font-dmSansSemibold text-sm">Prix du kilo</h3>
                <p className="text-xs text-greyScale300">
                  {" "}
                  ${travelDetail.pricePerKg}{" "}
                </p>
              </div>
            </div>
          </ModalLayout>
        </div>
      )}
    </div>
  );
}
