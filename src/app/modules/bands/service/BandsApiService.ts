import { RESTDataSource } from "apollo-datasource-rest";
import { IBand } from "../interfaces/IBand";

export class BandsApiService extends RESTDataSource {
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
}
