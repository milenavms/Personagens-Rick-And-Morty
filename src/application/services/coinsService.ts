import type { ICoinDetailsResponse, ICoinsResponse } from '../../domain/ICoins';
import type { ICoinsService } from '../../domain/ICoinsService';
import { api } from '../../infrastructure/api';
import type { GetCoinRequestDTO } from '../interfaces/coinsDTO';


export const coinsService: ICoinsService = {
  getCoins: async (query: GetCoinRequestDTO): Promise<ICoinsResponse> => {
    const response = await api.get<ICoinsResponse>('/coins',{
      params:{
        ...query 
      },
    });
    
    return response.data;
  },

  getCoinById: async (coinId: string): Promise<ICoinDetailsResponse> => {
    const response = await api.get<ICoinDetailsResponse>(`/coins/${coinId}`);
    return response.data;
  },
};