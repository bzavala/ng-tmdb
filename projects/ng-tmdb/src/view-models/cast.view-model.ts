import { Cast } from '../dto-models/credits.model';
import { ProfileSize } from '../enums/image-sizes.enum';
import { ImageHelper } from '../helpers/image.helper';

export class CastViewModel implements Cast {
  adult = false;
  gender = 0;
  id = 0;
  known_for_department = '';
  name = '';
  original_name = '';
  popularity = 0;
  profile_path: string | null = null;
  cast_id = 0;
  character = '';
  credit_id = '';
  order = 0;

  constructor(data: Partial<Cast> = {}) {
    Object.assign(this, data);
  }

  get hasProfileImage(): boolean {
    return !!this.profile_path;
  }

  get profileImageUrl(): string {
    return ImageHelper.getProfileUrl(ProfileSize.W185, this.profile_path);
  }
}
