import { RESTDataSource } from "apollo-datasource-rest";
import { IUserInput } from "../interfaces/IUserInput";
import { IUser } from "../interfaces/IUser";

export class UsersApiService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3004/v1/users";
  }

  async login(userInput: IUserInput): Promise<string> {
    let token = "invalid";
    const { email, password } = userInput;
    try {
      const response = await this.post(`/login`, {
        email,
        password,
      });
      token = response.jwt;
    } catch (e) {
      console.error(e);
    }
    return token;
  }

  async getUser(id: string): Promise<IUser> | null {
    try {
      const response = await this.get(`${id}`);
      console.log(response);
      return response;
    } catch (e) {
      console.error(e);
    }
    return null;
  }
}
