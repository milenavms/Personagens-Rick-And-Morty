import type { IDataDetailsResponse, IDataResponse } from '../../domain/IData';
import type { IDataService } from '../../domain/IDataService';
import { api } from '../../infrastructure/api';
import type { GetDataRequestDTO } from '../interfaces/dataDTO';


export const dataService: IDataService = {
  getAllData: async (query?: GetDataRequestDTO): Promise<IDataResponse> => {
    const response = await api.get<IDataResponse>('/character',{
      params:{
        ...query 
      },
    });
    
    return response.data;
  },

  getDataById: async (Id: string): Promise<IDataDetailsResponse> => {
    const response = await api.get<IDataDetailsResponse>(`/character/${Id}`);
    return response.data;
  },
};