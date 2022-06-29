import { RESTDataSource } from "apollo-datasource-rest";
import { IBand } from "../interfaces/IBand";
import { IBandInput } from "../interfaces/IBandInput";
import { BaseApiDataSource } from "../../common/BaseApiDataSource";

export class BandsApiService extends BaseApiDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3003/v1/bands";
  }

  async getAllBands(): Promise<IBand[]> | null {
    try {
      const response = await this.get(``);
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
}
