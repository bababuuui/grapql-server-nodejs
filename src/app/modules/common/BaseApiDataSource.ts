import { RESTDataSource } from "apollo-datasource-rest";

export class BaseApiDataSource extends RESTDataSource {
  willSendRequest(request) {
    request.headers.set("Authorization", this.context.token);
  }

  async didReceiveResponse(res, req) {
    const data = await res.json();
    if (res.ok) {
      data.id = data._id;
    }
    return data;
  }
}
