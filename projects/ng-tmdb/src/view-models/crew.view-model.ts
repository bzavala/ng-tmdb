import { Crew } from '../dto-models/credits.model';
import { ProfileSize } from '../enums/image-sizes.enum';
import { ImageHelper } from '../helpers/image.helper';

export class CrewViewModel implements Crew {
  adult = false;
  gender = 0;
  id = 0;
  known_for_department = '';
  name = '';
  original_name = '';
  popularity = 0;
  profile_path: string | null = null;
  credit_id = '';
  department = '';
  job = '';

  constructor(data: Partial<Crew> = {}) {
    Object.assign(this, data);
  }

  get hasProfileImage(): boolean {
    return !!this.profile_path;
  }

  get profileImageUrl(): string {
    return ImageHelper.getProfileUrl(ProfileSize.W185, this.profile_path);
  }
}
