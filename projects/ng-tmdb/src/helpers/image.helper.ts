import { BackdropSize, PosterSize, ProfileSize } from '../enums/image-sizes.enum';

export class ImageHelper {
  static baseImageUrl: string = 'https://image.tmdb.org/t/p/';

  private static _getTmdbImageUrl(size: string, path: string): string {
    return `${this.baseImageUrl}${size}${path}`;
  }

  private static _getPlaceholderUrl(
    width: string,
    height: string,
    placeholderText: string
  ): string {
    return `https://via.placeholder.com/${width}x${height}?text=${placeholderText}`;
  }

  static getPosterPlaceholderUrl(size: PosterSize, placeholderText: string = 'No Image'): string {
    let width = '500';
    let height = '750';
    switch (size) {
      case PosterSize.W500:
        width = '500';
        height = '750';
        break;
      case PosterSize.Original:
      default:
        width = '500';
        height = '750';
        break;
    }
    const label = encodeURIComponent(placeholderText);
    return this._getPlaceholderUrl(width, height, placeholderText);
  }

  static getProfilePlaceholderUrl(size: ProfileSize, placeholderText: string = 'No Image'): string {
    let width = '185';
    let height = '278';
    switch (size) {
      case ProfileSize.W185:
        width = '185';
        height = '278';
        break;
      case ProfileSize.H632:
        width = '421';
        height = '632';
        break;
      case ProfileSize.Original:
      default:
        width = '185';
        height = '278';
        break;
    }
    const label = encodeURIComponent(placeholderText);
    return this._getPlaceholderUrl(width, height, placeholderText);
  }

  static getPosterUrl(
    size: PosterSize,
    path: string | null,
    placeholderText: string = 'No Image'
  ): string {
    if (path && path.length > 0) {
      return this._getTmdbImageUrl(size, path);
    }
    return this.getPosterPlaceholderUrl(size, placeholderText);
  }

  static getProfileUrl(
    size: ProfileSize,
    path: string | null,
    placeholderText: string = 'No Image'
  ): string {
    if (path && path.length > 0) {
      return this._getTmdbImageUrl(size, path);
    }
    return this.getProfilePlaceholderUrl(size, placeholderText);
  }

  static getBackdropUrl(
    size: BackdropSize,
    path: string | null,
    placeholderText: string = 'No Image'
  ): string {
    if (path && path.length > 0) {
      return this._getTmdbImageUrl(size, path);
    }
    // Placeholder size for backdrops, defaulting to 780x439 (W780)
    let width = '780';
    let height = '439';
    switch (size) {
      case 'w300':
        width = '300';
        height = '169';
        break;
      case 'w780':
        width = '780';
        height = '439';
        break;
      case 'w1280':
        width = '1280';
        height = '720';
        break;
      case 'original':
      default:
        width = '780';
        height = '439';
        break;
    }
    const label = encodeURIComponent(placeholderText);
    return `https://via.placeholder.com/${width}x${height}?text=${label}`;
  }
}
