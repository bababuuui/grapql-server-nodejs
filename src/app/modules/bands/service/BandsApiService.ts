import { RESTDataSource } from "apollo-datasource-rest";
import { IBand } from "../interfaces/IBand";
import { IBandInput } from "../interfaces/IBandInput";
import { BaseApiDataSource } from "../../common/BaseApiDataSource";
import { IDeleteResult } from "../../common/interfaces/IDeleteResult";
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from "../../../constants/pagination";

export class BandsApiService extends BaseApiDataSource {
  constructor() {
    super();
    this.baseURL = process.env.BANDS_API_URL;
  }

  async getAllBands(offset: number = DEFAULT_OFFSET, limit: number = DEFAULT_LIMIT): Promise<IBand[]> | null {
    try {
      const response = await this.get(``, { offset, limit });
      return response.items;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async getBand(id: string): Promise<IBand> | null {
    try {
      return await this.get(`${id}`);
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async createBand(band: IBandInput): Promise<IBand> | null {
    try {
      const response = await this.post(``, band);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async updateBand(id: string, band: IBandInput): Promise<IBand> | null {
    try {
      const response = await this.put(`${id}`, band);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }

  async deleteBand(id: string): Promise<IDeleteResult> | null {
    try {
      const response = await this.delete(`${id}`);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }
}
