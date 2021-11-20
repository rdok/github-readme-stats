module.exports.Response = class {
  constructor() {
    this.headers = {};
  }

  setHeader = function(key, value) {
    this.headers[key] = value;
  };
  send = function(response) {
    console.log(response); // to log some occasional invalid responses from wakatime
    return {
      statusCode: 200,
      headers: this.headers,
      body: response,
    };
  };
  errorNotFound = function() {
    return {
      statusCode: 404,
      headers: this.headers,
      body: JSON.stringify({ code: 404, error: "Non-existent path requested" }),
    };
  };
};
