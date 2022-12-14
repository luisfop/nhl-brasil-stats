import { API_URL } from "../util/constants";

// https://statsapi.web.nhl.com/api/v1/schedule?startDate=2022-12-13&endDate=2022-12-13

class API {
  static async getGames() {
    const response = await fetch(
      `${API_URL.base}/schedule?&hydrate=team,linescore`
    );
    const data = await response.json();
    return {
      data,
      status: response.status,
    };
  }
}
export default API;
