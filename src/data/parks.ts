import { NPS_API_KEY } from "../constants/api";

// nice article on adding caching layer when ready https://tkdodo.eu/blog/react-query-meets-react-router
// consider switching to axios if fetching or posting becomes more than just the simple hit a single
// endpoint
export async function getParks() {
  const url = `https://developer.nps.gov/api/v1/parks?api_key=${NPS_API_KEY}`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return { data: json.data, total: json.total, limit: json.limit, start: json.start }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
    } else {
      throw error;
    }
  }
}