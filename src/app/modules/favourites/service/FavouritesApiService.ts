import { BaseApiDataSource } from "../../common/BaseApiDataSource";
import { IFavourite } from "../interfaces/IFavourite";

export class FavouritesApiService extends BaseApiDataSource {
  constructor() {
    super();
    this.baseURL = process.env.FAVOURITES_API_URL;
  }

  async getAllFavourites(): Promise<IFavourite[]> | null {
    try {
      const response = await this.get(``);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async addTrackToFavourites(id: string): Promise<IFavourite> | null {
    try {
      const response = await this.put(`/add`, {
        id,
        type: "tracks",
      });
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async addBandToFavourites(id: string): Promise<IFavourite> | null {
    try {
      const response = await this.put(`/add`, {
        id,
        type: "bands",
      });
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async addGenreToFavourites(id: string): Promise<IFavourite> | null {
    try {
      const response = await this.put(`/add`, {
        id,
        type: "genres",
      });
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async addArtistToFavourites(id: string): Promise<IFavourite> | null {
    try {
      const response = await this.put(`/add`, {
        id,
        type: "artists",
      });
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }
}
