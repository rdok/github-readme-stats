const { Response } = require("./response");
const index = require("../api/index");
const wakatime = require("../api/wakatime");

exports.main = async ({ queryStringParameters = {}, path }) => {
  const request = { query: queryStringParameters ?? {} };
  let response = new Response();

  switch (path) {
    case "/":
      return await index(request, response);
    case "/wakatime":
      return await wakatime(request, response);
    default:
      return response.errorNotFound();
  }
};
