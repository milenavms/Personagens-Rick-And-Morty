

export interface IDataResponse {
  info: Info;
  results: IDataDetailsResponse[];
}

export interface IDataDetailsResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginLocation;
  location: OriginLocation;
  image: string;
  episode: string[];
  url: string;
  created: string; 
}

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}


interface OriginLocation {
  name: string;
  url: string;
}


