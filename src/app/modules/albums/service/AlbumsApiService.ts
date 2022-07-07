import { RESTDataSource } from "apollo-datasource-rest";
import { IAlbum } from "../interfaces/IAlbum";
import { IAlbumInput } from "../interfaces/IAlbumInput";
import { BaseApiDataSource } from "../../common/BaseApiDataSource";
import { IDeleteResult } from "../../common/interfaces/IDeleteResult";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "../../../constants/pagination";

export class AlbumsApiService extends BaseApiDataSource {
  constructor() {
    super();
    this.baseURL = process.env.ALBUMS_API_URL;
  }

  async getAllAlbums(offset: number = DEFAULT_OFFSET, limit: number = DEFAULT_LIMIT): Promise<IAlbum[]> | null {
    try {
      const response = await this.get(``, { offset, limit });
      return response.items;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async getAlbum(id: string): Promise<IAlbum> | null {
    try {
      return await this.get(`${id}`);
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async createAlbum(album: IAlbumInput): Promise<IAlbum> | null {
    try {
      const response = await this.post(``, album);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async updateAlbum(id: string, album: IAlbumInput): Promise<IAlbum> | null {
    try {
      const response = await this.put(`${id}`, album);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async deleteAlbum(id: string): Promise<IDeleteResult> | null {
    try {
      const response = await this.delete(`${id}`);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }
}
