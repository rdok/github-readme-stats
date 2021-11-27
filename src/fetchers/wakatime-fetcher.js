const axios = require("axios");

const fetchWakatimeStats = async ({ username, api_domain, range }) => {
  let config = {};
  const wakatimeApiTokenRdok = process.env.WAKATIME_API_TOKEN_BASE64_RDOK;
  const shouldAddWakatimeAPIKey = !!range && username === "rdok" && !!wakatimeApiTokenRdok;
  if (shouldAddWakatimeAPIKey) {
    config.headers = { Authorization: `Basic ${wakatimeApiTokenRdok}` };
  }
  const apiDomain = api_domain ? api_domain.replace(/\/$/gi, "") : "wakatime.com";
  const url = `https://${apiDomain}/api/v1/users/${username}/stats/${range || ""}?is_including_today=true`;

  try {
    const { data } = await axios.get(url, config);
    return data.data;
  } catch (err) {
    console.log(err);
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
