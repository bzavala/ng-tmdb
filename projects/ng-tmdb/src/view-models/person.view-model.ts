import { Person } from '../dto-models/person.model';
import { ProfileSize } from '../enums/image-sizes.enum';
import { ImageHelper } from '../helpers/image.helper';

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';
const PLACEHOLDER_IMAGE = '/assets/images/profile-placeholder.png';

export class PersonViewModel implements Person {
  id: number = 0;
  name: string = '';
  birthday: string | null = null;
  deathday: string | null = null;
  gender: number = 0;
  biography: string = '';
  popularity: number = 0;
  place_of_birth: string = '';
  profile_path: string | null = null;
  known_for_department: string = '';
  also_known_as: string[] = [];
  adult: boolean = false;
  imdb_id: string = '';
  homepage: string | null = null;

  constructor(data: Partial<Person> = {}) {
    Object.assign(this, data);
  }

  get age(): number | null {
    if (!this.birthday) return null;
    const birth = new Date(this.birthday);
    const endDate = this.deathday ? new Date(this.deathday) : new Date();
    if (isNaN(birth.getTime()) || isNaN(endDate.getTime())) return null;
    let age = endDate.getFullYear() - birth.getFullYear();
    const m = endDate.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && endDate.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  get profileUrl(): string {
    return ImageHelper.getProfileUrl(ProfileSize.H632, this.profile_path);
  }

  get isAlive(): boolean {
    return this.deathday == null;
  }
}
