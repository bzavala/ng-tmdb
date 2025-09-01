export interface Person {
  id: number;
  name: string;
  biography: string;
  birthday: string | null;
  deathday: string | null;
  place_of_birth: string;
  profile_path: string | null;
  adult: boolean;
  also_known_as: string[];
  gender: number;
  homepage: string | null;
  imdb_id: string;
  known_for_department: string;
  popularity: number;
}
