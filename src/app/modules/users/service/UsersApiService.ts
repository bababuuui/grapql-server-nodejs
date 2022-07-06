import { RESTDataSource } from "apollo-datasource-rest";
import { IUserLoginInput } from "../interfaces/IUserLoginInput";
import { IUser } from "../interfaces/IUser";
import { BaseApiDataSource } from "../../common/BaseApiDataSource";
import { IUserRegisterInput } from "../interfaces/IUserRegisterInput";

export class UsersApiService extends BaseApiDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3004/v1/users";
  }

  async login(userInput: IUserLoginInput): Promise<string> {
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

  async register(userInput: IUserRegisterInput): Promise<IUser> | null {
    const { email, password, firstName, lastName } = userInput;
    try {
      const response = await this.post(`/register`, {
        email,
        password,
        firstName,
        lastName,
      });
      return response;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}
