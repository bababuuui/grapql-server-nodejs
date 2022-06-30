import { IGenre } from "../interfaces/IGenre";
import { IGenreInput } from "../interfaces/IGenreInput";
import { BaseApiDataSource } from "../../common/BaseApiDataSource";
import { IDeleteResult } from "../../common/interfaces/IDeleteResult";

export class GenresApiService extends BaseApiDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3001/v1/genres";
  }

  async getAllGenres(): Promise<IGenre[]> | null {
    try {
      const response = await this.get(``);
      return response.items;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async getGenre(id: string): Promise<IGenre> | null {
    try {
      return await this.get(`${id}`);
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async createGenre(genre: IGenreInput): Promise<IGenre> | null {
    try {
      const response = await this.post(``, genre);
      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async updateGenre(id: string, genre: IGenreInput): Promise<IGenre> | null {
    try {
      const response = await this.put(`${id}`, genre);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async deleteGenre(id: string): Promise<IDeleteResult> | null {
    try {
      const response = await this.delete(`${id}`);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }
}
