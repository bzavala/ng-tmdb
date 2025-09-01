import { Credits } from '../dto-models/credits.model';
import { CastViewModel } from './cast.view-model';
import { CrewViewModel } from './crew.view-model';

export class CreditsViewModel implements Credits {
  id = 0;
  cast: CastViewModel[] = [];
  crew: CrewViewModel[] = [];

  constructor(data: Partial<Credits> = {}) {
    this.id = data.id ?? 0;
    this.cast = (data.cast ?? []).map((castMember) => new CastViewModel(castMember));
    this.crew = (data.crew ?? []).map((crewMember) => new CrewViewModel(crewMember));
  }

  get directors(): CrewViewModel[] {
    return this.crew.filter((member) => member.job === 'Director');
  }

  get writers(): CrewViewModel[] {
    return this.crew.filter((member) => member.department === 'Writing');
  }

  topCast(limit: number = 5): CastViewModel[] {
    return this.cast
      .slice()
      .sort((a, b) => a.order - b.order)
      .slice(0, limit);
  }
}
