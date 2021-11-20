const axios = require("axios");

const fetchWakatimeStats = async ({ username, api_domain, range }) => {
  console.log("Fetching Wakatime Stats");
  const domain = api_domain ? api_domain.replace(/\/$/gi, "") : "wakatime.com";
  const normalisedRange = range || "";
  const endpoint = `https://${domain}/api/v1/users/${username}/stats/${normalisedRange}?is_including_today=true`;
  try {
    console.log(`GET: ${endpoint}`);
    const { data } = await axios.get(endpoint);
    return data.data;
  } catch (err) {
    if (err.response.status < 200 || err.response.status > 299) {
      throw new Error(
        "Wakatime user not found, make sure you have a wakatime profile",
      );
    }
    throw err;
  }
};

module.exports = {
  fetchWakatimeStats,
};
