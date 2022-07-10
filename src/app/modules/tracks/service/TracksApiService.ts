import { RESTDataSource } from "apollo-datasource-rest";
import { ITrack } from "../interfaces/ITrack";
import { BaseApiDataSource } from "../../common/BaseApiDataSource";
import { IDeleteResult } from "../../common/interfaces/IDeleteResult";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "../../../constants/pagination";
import { ITrackInput } from "../interfaces/ITrackInput";

export class TracksApiService extends BaseApiDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TRACKS_API_URL;
  }

  async getAllTracks(offset: number = DEFAULT_OFFSET, limit: number = DEFAULT_LIMIT): Promise<ITrack[]> | null {
    try {
      const response = await this.get(``, { offset, limit });
      return response.items;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async getTrack(id: string): Promise<ITrack> | null {
    try {
      return await this.get(`${id}`);
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async createTrack(track: ITrackInput): Promise<ITrack> | null {
    try {
      const response = await this.post(``, track);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async updateTrack(id: string, track: ITrackInput): Promise<ITrack> | null {
    try {
      const response = await this.put(`${id}`, track);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async deleteTrack(id: string): Promise<IDeleteResult> | null {
    try {
      const response = await this.delete(`${id}`);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }
}
