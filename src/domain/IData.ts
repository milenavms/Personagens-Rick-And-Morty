

export interface IDataResponse {
  info: Info;
  results: IDataDetailsResponse[];
}

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface IDataDetailsResponse {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
   gender: CharacterGender;
  origin: OriginLocation;
  location: OriginLocation;
  image: string;
  episode: string[];
  url: string;
  created: string; 
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}


interface OriginLocation {
  name: string;
  url: string;
}


