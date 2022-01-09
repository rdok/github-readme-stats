const { Response } = require("./response");
const index = require("../../api/index");
const wakatime = require("../../api/wakatime");
const pin = require("../../api/pin");
const topLanguages = require("../../api/top-langs");

exports.main = async (event) => {
  const path = event.requestContext.http.path;
  const request = { query: event.queryStringParameters ?? {} };
  const response = new Response();

  if (path === "/") return await index(request, response);
  if (path.startsWith("/pin")) return await pin(request, response);
  if (path.startsWith("/top-langs"))
    return await topLanguages(request, response);
  if (path.startsWith("/wakatime")) return await wakatime(request, response);

  return response.errorNotFound();
};
