import { useState } from 'react';
import { travelService } from '../../api/services/travelService';
import type { Travel } from "../../models/Travel.model";
import { useAppStore } from '../../store/useAppStore';

export const useTravel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const openSuccesPostCreatedModal = useAppStore(state => state.openSuccesPostCreatedModal);

  const getTravels = async () => {
    try {
      setIsLoading(true);
      const responseTravel = await travelService.getAll();
      return responseTravel.data;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const createTravel = async (data: Omit<Travel, 'id'>) => {
    try {
      setIsLoading(true);
      const newTravel = await travelService.create(data);
      openSuccesPostCreatedModal(); // Ouvre le modal de succès après création
      return newTravel.data;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const travelDetail = async (id: number) => {
    try {
      setIsLoading(true);
      const travel = await travelService.get(id);
      return travel.data;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getTravels,
    createTravel,
    travelDetail,
    isLoading,
    error
  };
};