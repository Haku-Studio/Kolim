import { useState } from 'react';
import { travelService } from '../../api/services/travelService';
import type { Travel } from "../../models/Travel.model";
import { useAppStore } from '../../store/useAppStore';
import { Request$ } from '../../models/Request.model';
import { requestService } from '../../api/services/requestService';

export const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const getUserRequests = async () => {
    try {
      setIsLoading(true);
      const responseRequest = await requestService.getByOwner();
      return responseRequest.data;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const createRequest = async (data: Omit<Request$, 'id'>) => {
    try {
      setIsLoading(true);
      const newRequest = await requestService.create(data);
      return newRequest.data;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getUserRequests,
    createRequest,
    isLoading,
    error
  };
};