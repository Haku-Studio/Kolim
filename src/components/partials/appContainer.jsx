import { useEffect, useState } from "react";
import DepatureWrapper from "../base/depatureWrapper";
import { useTravel } from "../../hooks/api/useTravel";
import { useAppStore } from "../../store/useAppStore";

export default function AppContainer({ type, searchResults }) {
  const { getTravels, travelDetail } = useTravel();
  const [travels, setTravels] = useState([]);
  const setTravelDetail = useAppStore((state) => state.setTravelDetail);

  useEffect(() => {
    const fetchTravels = async () => {
      try {
        if (type === "search" && searchResults) {
          const results = await searchResults;
          setTravels(results);
        } else {
          const allTravels = await getTravels();
          setTravels(allTravels);
        }
      } catch (error) {
        console.error("Error fetching travels:", error);
      }
    };

    fetchTravels();
  }, [type, searchResults]);

  const handleTravelClick = async (id) => {
    try {
      const travelDetail$ = await travelDetail(id);
      setTravelDetail(travelDetail$);
      
      console.log("travelDetail", travelDetail$);
    } catch (error) {
      console.error("Error fetching travel details:", error);
    }
  };

  return (
    <div className="p-4 space-y-2">
      {travels.length > 0 ? (
        travels.map((travel) => (
          <DepatureWrapper
            key={travel.id}
            travel={travel}
            click={() => handleTravelClick(travel.id)}
          />
        ))
      ) : (
        <p className="text-greyScale300 text-center">Aucun voyage trouvé.</p>
      )}
    </div>
  );
}
