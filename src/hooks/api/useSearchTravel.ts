import { useState } from "react";
import { SearchFormData } from "../../types/SearchForm.types";
import { travelService } from "../../api/services/travelService";

export const useSearchTravel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchTravels = async (searchParams: SearchFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const results = await travelService.searchTravels(searchParams);
      return results;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  return { searchTravels, isLoading, error };
};
