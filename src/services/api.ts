import { API_URL } from "../util/constants";

class API {
  static async getGames() {
    const response = await fetch(`${API_URL.base}/schedule`);
    const data = await response.json();
    return {
      data,
      status: response.status,
    };
  }
}
export default API;