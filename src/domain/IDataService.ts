
import type { GetDataRequestDTO } from "../application/interfaces/dataDTO";
import type { IDataDetailsResponse, IDataResponse } from "./IData";

export interface IDataService {
  getAllData: (query?: GetDataRequestDTO) => Promise<IDataResponse>;
  getDataById: (Id: string) => Promise<IDataDetailsResponse>;
}