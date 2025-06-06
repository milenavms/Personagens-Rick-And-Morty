
import type { GetCoinRequestDTO } from "../application/interfaces/coinsDTO";
import type { ICoinDetailsResponse, ICoinsResponse } from "./ICoins";

export interface ICoinsService {
  getCoins: (query: GetCoinRequestDTO) => Promise<ICoinsResponse>;
  getCoinById: (coinId: string) => Promise<ICoinDetailsResponse>;
}