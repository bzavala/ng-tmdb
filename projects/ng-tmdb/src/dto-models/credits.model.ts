export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path?: string | null;
  cast_id?: number;
  credit_id?: string;
  order?: number;
}

export interface Crew {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path?: string | null;
  credit_id?: string;
}

export interface Credits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}
