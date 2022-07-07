import { RESTDataSource } from "apollo-datasource-rest";
import { IArtist } from "../interfaces/IArtist";
import { IArtistInput } from "../interfaces/IArtistInput";
import { BaseApiDataSource } from "../../common/BaseApiDataSource";
import { IDeleteResult } from "../../common/interfaces/IDeleteResult";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "../../../constants/pagination";

export class ArtistsApiService extends BaseApiDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ARTISTS_API_URL;
  }

  async getAllArtists(offset: number = DEFAULT_OFFSET, limit: number = DEFAULT_LIMIT): Promise<IArtist[]> | null {
    try {
      const response = await this.get(``, { offset, limit });
      return response.items;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async getArtist(id: string): Promise<IArtist> | null {
    try {
      return await this.get(`${id}`);
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async createArtist(artist: IArtistInput): Promise<IArtist> | null {
    try {
      const response = await this.post(``, artist);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async updateArtist(id: string, artist: IArtistInput): Promise<IArtist> | null {
    try {
      const response = await this.put(`${id}`, artist);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async deleteArtist(id: string): Promise<IDeleteResult> | null {
    try {
      const response = await this.delete(`${id}`);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }
}
