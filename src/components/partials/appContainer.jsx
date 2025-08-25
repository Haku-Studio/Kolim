import { useEffect, useState } from "react";
import DepatureWrapper from "../base/depatureWrapper";
import { useTravel } from "../../hooks/api/useTravel";

export default function AppContainer() {
  const { getTravels, travelDetail, isLoading, error } = useTravel();
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    // Fetch travel data from an API or other source
    const fetchTravels = async () => {
      const travelResponse = await getTravels();
      // console.log(travelResponse);

      setTravels(travelResponse);
    };

    fetchTravels();
  }, []);

  const getTravelDetail = (id) => {
    try {
      const travelDetailResponse = travelDetail(id);
      console.log("travelDetail", travelDetailResponse));
    } catch (error) {
      console.error("Error fetching travel details:", error);
    }
  };

  return (
    <div className="p-4 space-y-2">
      {travels.length > 0 ? (
        travels.map((travel, index) => (
          <DepatureWrapper key={index} travel={travel} click={() => getTravelDetail(travel.id)} />
        ))
      ) : (
        <p className="text-greyScale300 text-center">Aucun voyage trouvé.</p>
      )}
    </div>
  );
}
