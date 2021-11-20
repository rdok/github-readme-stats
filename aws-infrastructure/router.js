const { Response } = require("./response");
const index = require("../api/index");
const wakatime = require("../api/wakatime");
const pin = require("../api/pin");
const topLanguages = require("../api/top-langs");

exports.main = async ({ queryStringParameters = {}, path }) => {
  const request = { query: queryStringParameters ?? {} };
  let response = new Response();

  switch (path) {
    case "/":
      return await index(request, response);
    case "/pin":
      return await pin(request, response);
    case "/top-langs":
      return await topLanguages(request, response);
    case "/wakatime":
      return await wakatime(request, response);
    default:
      return response.errorNotFound();
  }
};
